# webDactor

[English](README.md) · [العربية](README_AR.md) · [فهرس الملفات](docs/INDEX_AR.md)

موقع عيادة أسنان بواجهة React/CRACO وخادم FastAPI يستخدم MongoDB.

## المحتوى

- [frontend](frontend)
- [backend/server.py](backend/server.py)
- [backend/requirements.txt](backend/requirements.txt)
- [frontend/package.json](frontend/package.json)

## الإعداد والاستخدام

شغّل الواجهة والخادم كلّاً على حدة. يحدد ملف حزم الواجهة Yarn 1.22.22.

```sh
cd frontend
yarn install
yarn start
```

في طرفية أخرى أنشئ بيئة Python افتراضية وفعّلها، ثم:

```sh
cd backend
python -m pip install -r requirements.txt
python -m uvicorn server:app --reload --port 8000
```

يقرأ الخادم `MONGO_URL` و`DB_NAME` من `backend/.env`؛ راجع أيضاً `CORS_ORIGINS`. تتضمن المتطلبات حزمة تكامل خاصة ببيئة التطوير الأصلية، لذا يلزم التحقق من توفرها في البيئة المستهدفة.

## الترخيص

لا يتضمن المستودع ملف ترخيص في الجذر حالياً. هذا التوثيق لا يضيف ترخيصاً جديداً.

## المساهمة والتنقل

[CONTRIBUTING.md](CONTRIBUTING.md) · [فهرس التوثيق](docs/INDEX_AR.md) · [فهرس المشاريع العامة](https://github.com/InfoSecNazir/InfoSecNazir/blob/main/PROJECTS_AR.md)

## نطاق التحقق

تمت مراجعة أسماء الملفات ومسارات التوثيق وملفات الحزم لتنظيم المستودع. لم يتم تشغيل التطبيق أو نشره ضمن هذا التحديث.
