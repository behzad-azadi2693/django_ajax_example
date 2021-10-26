from django.shortcuts import render

# Create your views here.
from .models import DataOne
from django.http import JsonResponse, HttpResponse
from django.core import serializers

def index(request):
    datas = DataOne.objects.all()
    context = {
        'datas':datas
    }
    return render(request, 'index.html', context)

def change_qty(request):
    try:
        pk = request.GET.get('key_qty')
        obj = DataOne.objects.get(pk=pk)
        if request.user == obj.user:
            obj.qty += 1
            obj.save()
            obj_new = obj.qty
            return HttpResponse(obj_new)
        else:
            return Http404()
    except:
        return Http404()