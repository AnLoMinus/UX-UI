# Releasing

מסמך זה מתאר את תהליך הוצאת הגרסאות.

## Preparation
1. ודאו שכל ה־PRים העיקריים ממוזגים ל־main.
2. עדכנו את `CHANGELOG.md` לקטגוריית גרסה חדשה.
3. עדכנו את `VERSION` לגרסה החדשה.

## Versioning
אנו משתמשים ב־SemVer: `MAJOR.MINOR.PATCH`.

## Release Steps
1. צרו branch בשם `release/x.y.z`.
2. הריצו בדיקות ידניות.
3. פתחו PR עם כותרת `Release x.y.z`.
4. לאחר מיזוג, צרו תג git: `git tag -a vx.y.z -m "Release x.y.z"`.
5. פרסמו release notes בהתאם ל־CHANGELOG.

## Post-Release
- סגרו Issues קשורים.
- עדכנו ROADMAP עם מצב חדש.
