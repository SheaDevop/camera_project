from django.http import JsonResponse
from django.views import View
import requests

class CameraListView(View):
    def get(self, request):
        token = request.COOKIES.get('token')  # Retrieve token from cookies

        if not token:
            return JsonResponse({'error': 'No token provided'}, status=401)

        url = 'https://api.angelcam.com/v1/cameras'
        headers = {
            'Authorization': f'Bearer {token}',
        }
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            data = response.json()
            return JsonResponse(data, safe=False)
        else:
            return JsonResponse({'error': 'Failed to fetch cameras'}, status=response.status_code)
