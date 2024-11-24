from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import hangtheme, cities, Flowers, famouspeople, fruits, currency
from django.shortcuts import redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_protect
import csv, random
import pandas as pd
from langdetect import detect
import re
from unidecode import unidecode
from functools import reduce
import string
import googletrans
from googletrans import Translator
from pandas import *
from itertools import islice


# Create your views here.
@ensure_csrf_cookie
def redirect_view(request):
      response = redirect('/redirect-success/')
      return response
            
def hang_man(request):
    return render(request, 'hanghome.html')
    


def hang_theme(request):
        #return render(request, 'hangtheme.html')
        context = {}
        mytheme = hangtheme.objects.all().values()
        #print("mytheme.list ", mytheme.values_list )
        template = loader.get_template('hangtheme.html')
        context = {
                    'mytheme': mytheme,
                  }
        print('context ', context)
        return HttpResponse(template.render(context, request))


 
def play_game(request):
    # in django context accepts dictionary key value pairs. start with empty dict
    #name here is the name of the button from hangtheme.html
    alphabet_list = [' ','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F',
                    'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    #alphabet_list = string.ascii_lowercase
    context = {}
    col = None
    res = [0]
    name_len = 0   #Get the len of the random countryname below
    #print("theme_name ", theme_name)
    themename = request.POST.get('themename',None)
    print("themename ", themename)

    if themename == "Countries":
          # Using panda to read csv file
          data = pd.read_csv("/Users/babbloo/Documents/Python/myworld/countries.csv",usecols=['name'])
          print('data below csv ', data)
          #drop all null values to avoid error
          data.dropna(inplace = True)
          data['name'] = data['name'].apply(unidecode)
          col = 'name'

    elif themename == "Movies":
          data = pd.read_excel("/Users/babbloo/Documents/Python/myworld/myhangman/hangman/static/css/Oscar_Movie_Winners.xlsx",usecols=['Movie Name'])
          print('data below csv ', data)
          col = 'Movie Name'

    elif themename == "Cities":
           print("inside theme cities", themename)
            #To get data from query set.
             #data = cities.objects.values_list('city')
             #Use pandas dataframe to get values from query set.
           queryset = cities.objects.values_list('city')
           data = pd.DataFrame(list(queryset), columns=["city"])
           # Apply Unidecode to change latin to english
           data['city'] = data['city'].apply(unidecode)
           col = 'city'
           print('data', data)

    elif themename == "Harry Potter Characters":
          data = pd.read_csv("/Users/babbloo/Documents/Python/myworld/myhangman/hangman/static/css/characters.csv",usecols=['name'])
          print('data below csv ', data)
          col = 'name'
    

    elif themename == "Flowers & Plants":
          print("inside theme Flowers", themename)
          queryset = Flowers.objects.values_list('Name')
          data = pd.DataFrame(list(queryset), columns=["Name"])
          col = 'Name'
          print('data', data)
          
    elif themename == "Fruits":
          print("inside theme Fruits", themename)
          queryset = fruits.objects.values_list('Name')
          data = pd.DataFrame(list(queryset), columns=["Name"])
          col = 'Name'
          print('data', data)

    elif themename == "Famous People":
          print("inside theme FamousPeople", themename)
          #queryset = famouspeople.objects.all().values_list()
          print(famouspeople.objects.all().values_list())
          queryset = famouspeople.objects.values_list('Name', 'Occupation')
          data = pd.DataFrame(list(queryset), columns=["Name", "Occupation"])
          col = 'Name'
          col_fp = 'Occupation'
          print('data', data)

    elif themename == "Currency":
          print("inside theme Currency", themename)
          #queryset = famouspeople.objects.all().values_list()
          print(currency.objects.all().values_list())
          queryset = currency.objects.values_list('Currency', 'AlphabeticCode')
          data = pd.DataFrame(list(queryset), columns=["Currency", "AlphabeticCode"])
          col = 'Currency'
          col_fp = 'AlphabeticCode'
          print('data', data)

    print('col ', col)
    res = len(data)
    print('res', res)
    i=1
    n = random.randint(1,res)
    print('random n ', n)
    for i in range(1,res):    
        allname = data.loc[n,col]
        #Getting this value column to display as clue in the page
        if themename == "Famous People":
            alloccupation = data.loc[n,col_fp]

        elif themename == "Currency":
            alphacode = data.loc[n, col_fp] 
            
        upallname = allname.upper()
        all_name = upallname.replace("-"," ").replace("[","").replace("]","").replace("'","").replace(".","")
        name_len = len(all_name)#.__len__
    print('allname ', allname)
    print("name_len ", name_len)
    
    if themename == "Famous People":
        print("alloccu", alloccupation)
        context = {
              "themename":themename,
              "country_name":all_name,
              "alloccupation": alloccupation,
              "name_len":name_len
                  }
    elif themename == "Currency":
         print("alphacode", alphacode)
         context = {
              "themename":themename,
              "country_name":all_name,
              "alphacode": alphacode,
              "name_len":name_len
                  }
    else:
        context = {
              "themename":themename,
              "country_name":all_name,
              "name_len":name_len
                  }
    return render(request, 'playgame.html', context)


    




def setting(request):
      return render(request, 'setting.html')