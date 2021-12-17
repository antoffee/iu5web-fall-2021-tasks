from django.db.models.aggregates import Avg
from django.http.response import HttpResponse
from django.shortcuts import get_list_or_404, get_object_or_404, redirect, render
from .models import Orchestra, Musician
from django.db import models


def index(request):
    return render(request, 'index.html')

# musicians


def read_musician(request):
    musicians = Musician.objects.all()
    return render(request, 'musician/musician_list.html', {'musicians': musicians})


def create_musician(request):
    if request.method == 'GET':
        orchestras = Orchestra.objects.all()
        return render(request, 'musician/create_musician.html', {"orchestras": orchestras})
    else:
        dto = {}
        for key in request.POST:
            if key in Musician.__dict__:
                dto[key] = request.POST[key]
        dto['orchestra'] = get_object_or_404(
            Orchestra, pk=request.POST['orchestra'])
        new_musician = Musician(**dto)
        new_musician.save()
        return redirect('read_musician')


def update_musician(request, musician_id):
    if request.method == 'GET':
        orchestras = Orchestra.objects.all()
        musician = get_object_or_404(Musician, pk=musician_id)
        return render(request, 'musician/update_musician.html', {"musician": musician, "orchestras": orchestras})
    else:
        musician = get_object_or_404(Musician, pk=musician_id)
        for key in request.POST:
            if key in musician.__dict__ and key != 'orchestra':
                setattr(musician, key, request.POST[key])
        if 'orchestra' in request.POST:
            setattr(musician, 'orchestra', get_object_or_404(
                Orchestra, pk=request.POST['orchestra']))
        musician.save()
        return redirect('read_musician')


def delete_musician(request, musician_id):
    musician = get_object_or_404(Musician, pk=musician_id)
    musician.delete()
    return redirect(request.META.get('HTTP_REFERER'))

# orchestras


def read_orchestra(request):
    orchestras = Orchestra.objects.all()
    return render(request, 'orchestra/orchestra_list.html', {'orchestras': orchestras})


def create_orchestra(request):
    if request.method == 'GET':
        return render(request, 'orchestra/create_orchestra.html')
    else:
        new_orchestra = Orchestra(name=request.POST['name'])
        new_orchestra.save()
        return redirect('read_orchestra')


def update_orchestra(request, orchestra_id):
    if request.method == 'GET':
        orchestra = get_object_or_404(Orchestra, pk=orchestra_id)
        return render(request, 'orchestra/update_orchestra.html', {"orchestra": orchestra})
    else:
        orchestra = get_object_or_404(Orchestra, pk=orchestra_id)
        for key in request.POST:
            if key in orchestra.__dict__:
                setattr(orchestra, key, request.POST[key])
        orchestra.save()
        return redirect('read_orchestra')


def delete_orchestra(request, orchestra_id):
    orchestra = get_object_or_404(Orchestra, pk=orchestra_id)
    orchestra.delete()
    return redirect(request.META.get('HTTP_REFERER'))


# REPORT


def report(request):
    # return HttpResponse('♥')
    found_musicians = Musician.objects.filter(name__endswith='ов')
    average_salaries = []
    for orchestra in Orchestra.objects.all():
        average_salaries.append({"orchestra": orchestra,  "salary": round(Musician.objects.filter(
            orchestra=orchestra.pk).aggregate(Avg('salary'))['salary__avg'] or 0)})
    return render(request, 'report.html', {"found_musicians": found_musicians, "average_salaries": sorted(average_salaries, key=lambda salary: salary['salary'])})
