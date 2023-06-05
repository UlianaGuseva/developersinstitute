import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'marsel.settings')
django.setup()


from chapters.models import Colors13
data = [['colors1.jpg', 'colors1', '1-2', 'colors'], 
        ['colors2.jpg', 'colors2', '1-2', 'colors'], 
        ['colors3.jpg', 'colors3', '1-2', 'colors'], 
        ['colors4.jpg', 'colors4', '1-2', 'colors'], 
        ['colors5.jpg', 'colors5', '1-2', 'colors'], 
        ['colors6.jpg', 'colors6', '1-2', 'colors'], 
        ['colors7.jpg', 'colors7', '1-2', 'colors'], 
        ['colors8.jpg', 'colors8', '1-2', 'colors'], 
        ['colors9.jpg', 'colors9', '1-2', 'colors'], 
        ['colors10.jpg', 'colors10', '1-2', 'colors'], 
        ['colors11.jpg', 'colors11', '1-2', 'colors'], 
        ['colors12.jpg', 'colors12', '1-2', 'colors'], 
        ['colors13.jpg', 'colors13', '1-2', 'colors'], 
        ['colors14.jpg', 'colors14', '1-2', 'colors'], 
        ['colors15.jpg', 'colors15', '1-2', 'colors'], 
        ['colors16.jpg', 'colors16', '1-2', 'colors'], ]

if __name__ == '__main__':
    for i in data:
        print("Populating database")

    
        new_task = Colors13(image = i[0],
        name = i[1],
        age = i[2],
        theme = i[3],)
    
        new_task.save()