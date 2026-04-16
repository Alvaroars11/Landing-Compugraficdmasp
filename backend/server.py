from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nombre: str
    email: str
    empresa: Optional[str] = None
    mensaje: str
    seccion: str = "compugrafic"  # compugrafic or dp
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    nombre: str
    email: EmailStr
    empresa: Optional[str] = None
    mensaje: str
    seccion: str = "compugrafic"

class ContactResponse(BaseModel):
    success: bool
    message: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "d+p | compugrafic API"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(input: ContactMessageCreate):
    try:
        contact_obj = ContactMessage(**input.model_dump())
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        await db.contact_messages.insert_one(doc)
        
        return ContactResponse(
            success=True,
            message="¡Gracias por contactarnos! Te responderemos pronto."
        )
    except Exception as e:
        logging.error(f"Error saving contact: {e}")
        raise HTTPException(status_code=500, detail="Error al enviar mensaje")

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contacts():
    contacts = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
    for contact in contacts:
        if isinstance(contact['timestamp'], str):
            contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    return contacts

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
