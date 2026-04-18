"""
Backend API Tests for d+p | compugrafic Landing Page
Tests contact form submission and retrieval endpoints
"""
import pytest
import requests
import os
import uuid

from pathlib import Path
from dotenv import load_dotenv
load_dotenv(Path(__file__).resolve().parents[2] / 'frontend' / '.env')
BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
assert BASE_URL, "REACT_APP_BACKEND_URL not set"

class TestAPIRoot:
    """Test API root endpoint"""
    
    def test_api_root_returns_200(self):
        """Test that API root endpoint is accessible"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "d+p | compugrafic API"
        print(f"✓ API root returns: {data}")


class TestContactEndpoint:
    """Test contact form submission endpoint"""
    
    def test_submit_contact_compugrafic_section(self):
        """Test contact form submission for Compugrafic section"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "nombre": f"TEST_User_{unique_id}",
            "email": f"test_{unique_id}@example.com",
            "empresa": "Test Company",
            "mensaje": "Test message for Compugrafic section",
            "seccion": "compugrafic",
            "destinoEmail": "ventas@compugrafic.com"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        
        data = response.json()
        assert data["success"] is True
        assert "message" in data
        assert "Gracias" in data["message"]
        print(f"✓ Compugrafic contact submission: {data}")
    
    def test_submit_contact_dp_section(self):
        """Test contact form submission for D+P section"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "nombre": f"TEST_DP_User_{unique_id}",
            "email": f"testdp_{unique_id}@example.com",
            "empresa": "D+P Test Company",
            "mensaje": "Test message for D+P señalética section",
            "seccion": "dp",
            "destinoEmail": "dmasp.ventas@compugrafic.com"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        
        data = response.json()
        assert data["success"] is True
        print(f"✓ D+P contact submission: {data}")
    
    def test_submit_contact_without_empresa(self):
        """Test contact form submission without optional empresa field"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "nombre": f"TEST_NoEmpresa_{unique_id}",
            "email": f"noempresa_{unique_id}@example.com",
            "mensaje": "Test message without empresa",
            "seccion": "compugrafic",
            "destinoEmail": "ventas@compugrafic.com"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        
        data = response.json()
        assert data["success"] is True
        print(f"✓ Contact without empresa: {data}")
    
    def test_submit_contact_missing_required_fields(self):
        """Test contact form submission with missing required fields"""
        # Missing nombre
        payload = {
            "email": "test@example.com",
            "mensaje": "Test message"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422  # Validation error
        print(f"✓ Missing nombre returns 422: {response.status_code}")
    
    def test_submit_contact_invalid_email(self):
        """Test contact form submission with invalid email format"""
        payload = {
            "nombre": "Test User",
            "email": "invalid-email-format",
            "mensaje": "Test message"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        # Should return 422 for invalid email format (EmailStr validation)
        assert response.status_code == 422
        print(f"✓ Invalid email returns 422: {response.status_code}")
    
    def test_submit_contact_empty_mensaje(self):
        """Test contact form submission with empty mensaje"""
        payload = {
            "nombre": "Test User",
            "email": "test@example.com",
            "mensaje": ""
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        # Empty string should still be accepted (no min length validation)
        # But if validation is added, it should return 422
        print(f"✓ Empty mensaje response: {response.status_code}")


class TestContactRetrieval:
    """Test contact retrieval endpoint"""
    
    def test_get_contacts_returns_list(self):
        """Test that GET /api/contact returns a list"""
        response = requests.get(f"{BASE_URL}/api/contact")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, list)
        print(f"✓ GET contacts returns list with {len(data)} items")
    
    def test_contact_data_structure(self):
        """Test that contact data has correct structure"""
        response = requests.get(f"{BASE_URL}/api/contact")
        assert response.status_code == 200
        
        data = response.json()
        if len(data) > 0:
            contact = data[0]
            # Check required fields exist
            assert "id" in contact
            assert "nombre" in contact
            assert "email" in contact
            assert "mensaje" in contact
            assert "seccion" in contact
            assert "timestamp" in contact
            print(f"✓ Contact data structure is correct: {list(contact.keys())}")
        else:
            print("⚠ No contacts in database to verify structure")
    
    def test_contact_persistence_after_create(self):
        """Test that created contact is persisted and retrievable"""
        unique_id = str(uuid.uuid4())[:8]
        unique_email = f"persist_test_{unique_id}@example.com"
        
        # Create contact
        payload = {
            "nombre": f"TEST_Persist_{unique_id}",
            "email": unique_email,
            "mensaje": "Persistence test message",
            "seccion": "compugrafic",
            "destinoEmail": "ventas@compugrafic.com"
        }
        
        create_response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert create_response.status_code == 200
        
        # Retrieve and verify
        get_response = requests.get(f"{BASE_URL}/api/contact")
        assert get_response.status_code == 200
        
        contacts = get_response.json()
        matching = [c for c in contacts if c.get("email") == unique_email]
        assert len(matching) > 0, f"Contact with email {unique_email} not found"
        
        found_contact = matching[0]
        assert found_contact["nombre"] == payload["nombre"]
        assert found_contact["mensaje"] == payload["mensaje"]
        assert found_contact["seccion"] == payload["seccion"]
        print(f"✓ Contact persisted and retrieved: {found_contact['email']}")


class TestSectionSpecificBehavior:
    """Test section-specific behavior"""
    
    def test_compugrafic_section_default(self):
        """Test that default section is compugrafic"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "nombre": f"TEST_Default_{unique_id}",
            "email": f"default_{unique_id}@example.com",
            "mensaje": "Test default section"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        
        # Verify the contact was saved with default section
        get_response = requests.get(f"{BASE_URL}/api/contact")
        contacts = get_response.json()
        matching = [c for c in contacts if c.get("email") == payload["email"]]
        
        if matching:
            assert matching[0]["seccion"] == "compugrafic"
            print("✓ Default section is compugrafic")
    
    def test_dp_section_explicit(self):
        """Test explicit D+P section assignment"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "nombre": f"TEST_DP_Explicit_{unique_id}",
            "email": f"dp_explicit_{unique_id}@example.com",
            "mensaje": "Test D+P section",
            "seccion": "dp"
        }
        
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        
        # Verify the contact was saved with dp section
        get_response = requests.get(f"{BASE_URL}/api/contact")
        contacts = get_response.json()
        matching = [c for c in contacts if c.get("email") == payload["email"]]
        
        if matching:
            assert matching[0]["seccion"] == "dp"
            print("✓ D+P section correctly assigned")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
