import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next.use(LanguageDetector).use(initReactI18next).init({
    debug : true,
    fallbackLng: "en",
    lng : "en",
    resources : {
        en : {
            translation : {
                searchBtn : "search",
                searchCity : "Search for a city",
                weather : "Weather",
                humidity : "Humidity",
                uv : "UV index",
                rainChance : "Chance of rain",
                air : "AIR CONDITIONS",
                wind : "wind",
                feels : "Real feel",
                todayCast : "TODAY'S FORECAST",
                weekCast : "7-DAY FORECAST",
            }
        },

        fr : {
            translation : {
                searchBtn : "chercher",
                searchCity : "chercher une ville",
                weather : "Météo",
                humidity : "Humidité",
                uv : "indice UV",
                rainChance : "Chance de pluie",
                air : "Conditions atmosphériques",
                wind : "vent",
                feels : "Sensation réelle",
                todayCast : "Prévisions pour aujourd'hui",
                weekCast : "Prévisions sur 7 jours",
            }
        },

        ar : {
            translation : {
                searchBtn : "بحث",
                searchCity : "البحث عن مدينة",
                weather : "الطقس",
                humidity : "الرطوبة",
                uv : "مؤشر الأشعة فوق البنفسجية",
                rainChance : "فرصة هطول الأمطار",
                air : "أحوال الطقس",
                wind : "الرياح",
                feels : "الشعور الحقيقي",
                todayCast : "توقعات اليوم",
                weekCast : "توقعات الأسبوع",
            }
        }
    }
});