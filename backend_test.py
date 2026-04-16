import requests
import sys
from datetime import datetime

class CompugraficAPITester:
    def __init__(self, base_url="https://sitio-listo-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if endpoint else self.api_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {response_data}")
                    return True, response_data
                except:
                    print(f"   Response: {response.text[:200]}")
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")
                return False, {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )

    def test_contact_submission_compugrafic(self):
        """Test contact form submission for Compugrafic section"""
        test_data = {
            "nombre": "Test User",
            "email": "test@example.com",
            "empresa": "Test Company",
            "mensaje": "This is a test message for Compugrafic services",
            "seccion": "compugrafic"
        }
        
        return self.run_test(
            "Contact Form Submission (Compugrafic)",
            "POST",
            "contact",
            200,
            data=test_data
        )

    def test_contact_submission_dp(self):
        """Test contact form submission for D+P section"""
        test_data = {
            "nombre": "Test User DP",
            "email": "testdp@example.com",
            "mensaje": "This is a test message for D+P señalética services",
            "seccion": "dp"
        }
        
        return self.run_test(
            "Contact Form Submission (D+P)",
            "POST",
            "contact",
            200,
            data=test_data
        )

    def test_contact_validation_missing_fields(self):
        """Test contact form validation with missing required fields"""
        test_data = {
            "nombre": "Test User",
            # Missing email and mensaje (required fields)
            "empresa": "Test Company"
        }
        
        return self.run_test(
            "Contact Form Validation (Missing Fields)",
            "POST",
            "contact",
            422,  # Validation error
            data=test_data
        )

    def test_contact_validation_invalid_email(self):
        """Test contact form validation with invalid email"""
        test_data = {
            "nombre": "Test User",
            "email": "invalid-email",
            "mensaje": "Test message"
        }
        
        return self.run_test(
            "Contact Form Validation (Invalid Email)",
            "POST",
            "contact",
            422,  # Validation error
            data=test_data
        )

    def test_get_contacts(self):
        """Test retrieving contacts"""
        return self.run_test(
            "Get Contacts",
            "GET",
            "contact",
            200
        )

def main():
    print("🚀 Starting Compugrafic API Tests")
    print("=" * 50)
    
    # Setup
    tester = CompugraficAPITester()

    # Run tests
    print("\n📡 Testing API Connectivity...")
    tester.test_root_endpoint()

    print("\n📝 Testing Contact Form Functionality...")
    tester.test_contact_submission_compugrafic()
    tester.test_contact_submission_dp()
    
    print("\n🔍 Testing Form Validation...")
    tester.test_contact_validation_missing_fields()
    tester.test_contact_validation_invalid_email()
    
    print("\n📋 Testing Data Retrieval...")
    tester.test_get_contacts()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())