import requests

client_id = "your_client_id"
client_secret = "your_client_secret"

test_code = """
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}
"""

response = requests.post("https://api.jdoodle.com/v1/execute", json={
    "script": test_code,
    "language": "cpp17",
    "versionIndex": "1",
    "stdin": "",
    "clientId": "9aa5311d99810b3db7f4d6aaaa83d5a9",
    "clientSecret": "a09ed8c852ad4bf9e6e5ca1eadb08e693ab6d749e1d994e996cd9805a8d7791"
})

print(response.json())  # Check API response
