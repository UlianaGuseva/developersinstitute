# Generated by Django 4.2.1 on 2023-06-01 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chapters', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Animals13',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField()),
                ('name', models.CharField(blank=True, null=True)),
                ('age', models.CharField()),
                ('theme', models.CharField()),
            ],
        ),
    ]
