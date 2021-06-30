# Generated by Django 3.2 on 2021-06-29 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('singer', models.CharField(max_length=200)),
                ('song_max', models.FloatField()),
                ('song_min', models.FloatField()),
                ('woman_max', models.FloatField()),
                ('woman_min', models.FloatField()),
                ('man_mix', models.FloatField()),
                ('man_min', models.FloatField()),
            ],
        ),
    ]
