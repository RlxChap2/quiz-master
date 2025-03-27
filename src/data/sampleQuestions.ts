import type { Question } from '../types';

export const programmingQuestions: Question[] = [
  {
    // Lecture 1 - Chapter 1
    id: 'prog1',
    question: {
      en: 'What is an algorithm?',
      ar: 'ما هي الخوارزمية؟'
    },
    options: {
      en: [
        'A programming language',
        'A set of defined steps to solve a problem',
        'A computer hardware component',
        'A type of error in programming'
      ],
      ar: [
        'لغة برمجة',
        'مجموعة من الخطوات المحددة لحل مشكلة',
        'مكون من مكونات الحاسوب',
        'نوع من الأخطاء البرمجية'
      ]
    },
    correctAnswer: 1,
    explanation: {
      en: 'An algorithm is a structured set of steps used to solve a specific problem.',
      ar: 'الخوارزمية هي مجموعة خطوات منظمة تستخدم لحل مشكلة معينة.'
    }
  },
  {
    id: 'prog2',
    question: {
      en: 'Which of the following is NOT a characteristic of a good algorithm?',
      ar: 'أي من التالي ليس من خصائص الخوارزمية الجيدة؟'
    },
    options: {
      en: [
        'It must be finite',
        'It must always produce an incorrect output',
        'It should be effective',
        'It should be unambiguous'
      ],
      ar: [
        'يجب أن تكون محدودة',
        'يجب أن تنتج مخرجات غير صحيحة دائمًا',
        'يجب أن تكون فعالة',
        'يجب أن تكون غير غامضة'
      ]
    },
    correctAnswer: 1,
    explanation: {
      en: 'A good algorithm must always provide correct results and follow structured steps.',
      ar: 'الخوارزمية الجيدة يجب أن تنتج نتائج صحيحة وتتبع خطوات منظمة.'
    }
  },
  {
    id: 'prog3',
    question: {
      en: 'Which step comes first in problem-solving in programming?',
      ar: 'ما هي الخطوة الأولى في حل المشكلات في البرمجة؟'
    },
    options: {
      en: [
        'Writing code',
        'Debugging',
        'Analyzing the problem',
        'Testing'
      ],
      ar: [
        'كتابة الكود',
        'تصحيح الأخطاء',
        'تحليل المشكلة',
        'الاختبار'
      ]
    },
    correctAnswer: 2,
    explanation: {
      en: 'Analyzing the problem is the first step to understanding the inputs and expected outputs.',
      ar: 'تحليل المشكلة هو الخطوة الأولى لفهم المدخلات والمخرجات المتوقعة.'
    }
  },
  {
    id: 'prog4',
    question: {
      en: 'What is the primary purpose of debugging?',
      ar: 'ما هو الغرض الأساسي من تصحيح الأخطاء (Debugging)؟'
    },
    options: {
      en: [
        'To intentionally introduce errors',
        'To test the final program',
        'To find and fix errors in the code',
        'To write a new program'
      ],
      ar: [
        'إدخال أخطاء عمدًا',
        'اختبار البرنامج النهائي',
        'العثور على الأخطاء وإصلاحها في الكود',
        'كتابة برنامج جديد'
      ]
    },
    correctAnswer: 2,
    explanation: {
      en: 'Debugging is the process of identifying and fixing errors in a program to ensure it works correctly.',
      ar: 'تصحيح الأخطاء هو عملية العثور على الأخطاء في البرنامج وإصلاحها لضمان عمله بشكل صحيح.'
    }
  },
  // Lecture 2 - Chapter 2
  {
    id: 'prog5',
    question: {
      en: 'What type of programming language is C#?',
      ar: 'ما نوع لغة البرمجة C#؟'
    },
    options: {
      en: ['Low-level', 'High-level', 'Assembly', 'Machine language'],
      ar: ['منخفضة المستوى', 'عالية المستوى', 'لغة تجميع', 'لغة آلة']
    },
    correctAnswer: 1,
    explanation: {
      en: 'C# is a high-level programming language designed for modern software development.',
      ar: 'C# هي لغة برمجة عالية المستوى مصممة لتطوير البرمجيات الحديثة.'
    }
  },
  {
    id: 'prog6',
    question: {
      en: 'Which file extension does a compiled C# program have?',
      ar: 'ما امتداد الملف الذي يحصل عليه برنامج C# بعد التجميع؟'
    },
    options: {
      en: ['.cs', '.exe or .dll', '.c', '.java'],
      ar: ['.cs', '.exe أو .dll', '.c', '.java']
    },
    correctAnswer: 1,
    explanation: {
      en: 'After compilation, a C# program is converted into an executable file (.exe) or a library file (.dll).',
      ar: 'بعد التجميع، يتم تحويل برنامج C# إلى ملف تنفيذي (.exe) أو مكتبة (.dll).'
    }
  },
  {
    id: 'prog7',
    question: {
      en: 'Which of the following is NOT a reserved keyword in C#?',
      ar: 'أي من التالي ليس كلمة محجوزة في C#؟'
    },
    options: {
      en: ['public', 'class', 'define', 'namespace'],
      ar: ['public', 'class', 'define', 'namespace']
    },
    correctAnswer: 2,
    explanation: {
      en: 'The word "define" is not a reserved keyword in C#, while the others are.',
      ar: 'الكلمة "define" ليست كلمة محجوزة في C#، بينما البقية هي كلمات محجوزة.'
    }
  },
  {
    id: 'prog8',
    question: {
      en: 'Which IDE is most commonly used for C# development?',
      ar: 'ما بيئة التطوير الأكثر استخدامًا لبرمجة C#؟'
    },
    options: {
      en: ['Eclipse', 'Visual Studio', 'IntelliJ IDEA', 'NetBeans'],
      ar: ['Eclipse', 'Visual Studio', 'IntelliJ IDEA', 'NetBeans']
    },
    correctAnswer: 1,
    explanation: {
      en: 'Visual Studio is the most widely used IDE for C# development, as it is developed by Microsoft.',
      ar: 'Visual Studio هي بيئة التطوير الأكثر استخدامًا لبرمجة C#، حيث تم تطويرها بواسطة Microsoft.'
    }
  },
  {
    id: 'prog9',
    question: {
      en: 'Which of the following is a case-sensitive programming language?',
      ar: 'أي من اللغات التالية حساسة لحالة الأحرف؟'
    },
    options: {
      en: ['C#', 'BASIC', 'Pascal', 'COBOL'],
      ar: ['C#', 'BASIC', 'Pascal', 'COBOL']
    },
    correctAnswer: 0,
    explanation: {
      en: 'C# is case-sensitive, meaning "class" and "Class" are different.',
      ar: 'C# حساسة لحالة الأحرف، أي أن "class" و "Class" يعتبران مختلفين.'
    }
  },
  {
    id: 'prog10',
    question: {
      en: 'Which of the following is true about C#?',
      ar: 'أي من العبارات التالية صحيحة عن C#؟'
    },
    options: {
      en: [
        'C# is an object-oriented programming language.',
        'C# does not support garbage collection.',
        'C# is a low-level programming language.',
        'C# is mainly used for embedded systems.'
      ],
      ar: [
        'C# هي لغة برمجة كائنية التوجه.',
        'C# لا تدعم إدارة الذاكرة التلقائية.',
        'C# لغة برمجة منخفضة المستوى.',
        'C# تُستخدم بشكل أساسي في الأنظمة المدمجة.'
      ]
    },
    correctAnswer: 0,
    explanation: {
      en: 'C# is an object-oriented programming language designed for modern software applications.',
      ar: 'C# هي لغة برمجة كائنية التوجه مصممة لتطوير التطبيقات الحديثة.'
    }
  },
  {
    id: 'prog11',
    question: {
      en: 'Which of the following is NOT a feature of C#?',
      ar: 'أي من الميزات التالية ليست من ميزات C#؟'
    },
    options: {
      en: ['Garbage collection', 'Platform independence', 'Object-oriented', 'Type safety'],
      ar: ['إدارة الذاكرة التلقائية', 'استقلالية المنصة', 'كائنية التوجه', 'أمان الأنواع']
    },
    correctAnswer: 1,
    explanation: {
      en: 'C# is designed to work primarily within the .NET framework, so it is not platform-independent like Java.',
      ar: 'تم تصميم C# للعمل ضمن بيئة .NET، لذا فهي ليست مستقلة عن المنصة مثل Java.'
    }
  },
  {
    id: 'prog12',
    question: {
      en: 'Which command is used to compile a C# program from the command line?',
      ar: 'ما هو الأمر المستخدم لتجميع برنامج C# من خلال سطر الأوامر؟'
    },
    options: {
      en: ['gcc', 'javac', 'csc', 'python'],
      ar: ['gcc', 'javac', 'csc', 'python']
    },
    correctAnswer: 2,
    explanation: {
      en: 'The C# compiler is "csc" (C# Compiler), which compiles .cs files into executable programs.',
      ar: 'المترجم الخاص بـ C# هو "csc"، والذي يقوم بتجميع ملفات .cs إلى برامج قابلة للتنفيذ.'
    }
  },
  {
    id: 'prog13',
    question: {
      en: 'Which of the following is NOT an essential window in Visual Studio?',
      ar: 'أي من النوافذ التالية ليست أساسية في Visual Studio؟'
    },
    options: {
      en: ['Solution Explorer', 'Code Editor', 'Error List', 'Task Manager'],
      ar: ['مستكشف الحلول', 'محرر الأكواد', 'قائمة الأخطاء', 'مدير المهام']
    },
    correctAnswer: 3,
    explanation: {
      en: 'Task Manager is a Windows system tool, not a part of Visual Studio IDE.',
      ar: 'مدير المهام هو أداة نظام في Windows، وليس جزءًا من بيئة Visual Studio.'
    }
  },
  {
    id: 'prog14',
    question: {
      en: 'What is the default file extension for C# source code files?',
      ar: 'ما هو الامتداد الافتراضي لملفات كود المصدر في C#؟'
    },
    options: {
      en: ['.cs', '.cpp', '.c', '.java'],
      ar: ['.cs', '.cpp', '.c', '.java']
    },
    correctAnswer: 0,
    explanation: {
      en: 'C# source code files have a .cs extension.',
      ar: 'ملفات كود المصدر في C# تحمل الامتداد .cs.'
    }
  },
  {
    id: 'prog15',
    question: {
      en: 'What is the default file extension for C# source code files?',
      ar: 'ما هو الامتداد الافتراضي لملفات كود المصدر في C#؟'
    },
    options: {
      en: ['.cs', '.cpp', '.c', '.java'],
      ar: ['.cs', '.cpp', '.c', '.java']
    },
    correctAnswer: 0,
    explanation: {
      en: 'C# source code files have a .cs extension.',
      ar: 'ملفات كود المصدر في C# تحمل الامتداد .cs.'
    }
  },
  // Lecture 3 - Chapter 3
  {
    id: 'prog16',
    question: {
      en: 'What is a variable in programming?',
      ar: 'ما هو المتغير في البرمجة؟'
    },
    options: {
      en: ['A constant value', 'A container for storing data', 'A function', 'An operator'],
      ar: ['قيمة ثابتة', 'وعاء لتخزين البيانات', 'دالة', 'عامل']
    },
    correctAnswer: 1,
    explanation: {
      en: 'A variable is a container that stores data that can change during program execution.',
      ar: 'المتغير هو وعاء يخزن البيانات التي يمكن أن تتغير أثناء تنفيذ البرنامج.'
    }
  },
  {
    id: 'prog17',
    question: {
      en: 'Where are primitive data types stored in memory?',
      ar: 'أين يتم تخزين الأنواع البدائية في الذاكرة؟'
    },
    options: {
      en: ['Heap', 'Stack', 'Disk', 'Cache'],
      ar: ['Heap', 'Stack', 'القرص', 'الذاكرة المؤقتة']
    },
    correctAnswer: 1,
    explanation: {
      en: 'Primitive data types are stored in the stack memory.',
      ar: 'يتم تخزين الأنواع البدائية في ذاكرة المكدس (Stack).'
    }
  },
  {
    id: 'prog18',
    question: {
      en: 'Which of the following variable names is invalid in C#?',
      ar: 'أي من أسماء المتغيرات التالية غير صالح في C#؟'
    },
    options: {
      en: ['firstName', '1stUser', '_username', 'userAge'],
      ar: ['firstName', '1stUser', '_username', 'userAge']
    },
    correctAnswer: 1,
    explanation: {
      en: 'Variable names cannot start with a number.',
      ar: 'لا يمكن أن يبدأ اسم المتغير برقم.'
    }
  },
  {
    id: 'prog19',
    question: {
      en: 'Which naming convention is recommended for variables in C#?',
      ar: 'ما هي القاعدة الموصى بها لتسمية المتغيرات في C#؟'
    },
    options: {
      en: ['PascalCase', 'camelCase', 'snake_case', 'UPPERCASE'],
      ar: ['PascalCase', 'camelCase', 'snake_case', 'UPPERCASE']
    },
    correctAnswer: 1,
    explanation: {
      en: 'The recommended naming convention for variables in C# is camelCase.',
      ar: 'القاعدة الموصى بها لتسمية المتغيرات في C# هي camelCase.'
    }
  },
  {
    id: 'prog20',
    question: {
      en: 'Which of the following is a correct declaration of a variable in C#?',
      ar: 'أي من الخيارات التالية يمثل إعلانًا صحيحًا لمتغير في C#؟'
    },
    options: {
      en: ['int age;', 'age int;', 'integer age;', 'var age: int;'],
      ar: ['int age;', 'age int;', 'integer age;', 'var age: int;']
    },
    correctAnswer: 0,
    explanation: {
      en: 'In C#, variables are declared with the syntax: dataType variableName;',
      ar: 'في C#، يتم إعلان المتغيرات باستخدام الصيغة: dataType variableName;'
    }
  },
  {
    id: 'prog21',
    question: {
      en: 'Which of the following is a primitive data type in C#?',
      ar: 'أي من الأنواع التالية يعتبر نوعًا بدائيًا في C#؟'
    },
    options: {
      en: ['string', 'object', 'int', 'array'],
      ar: ['string', 'object', 'int', 'array']
    },
    correctAnswer: 2,
    explanation: {
      en: 'int is a primitive data type in C#.',
      ar: 'int هو نوع بيانات بدائي في C#.'
    }
  },
  // Lecture 4 - Chapter 4
  {
    id: 'prog22',
    question: {
      en: 'Which operator is used for assignment in C#?',
      ar: 'أي من المعاملات التالية يُستخدم لإسناد القيم في C#؟'
    },
    options: {
      en: ['+', '==', '=', '%'],
      ar: ['+', '==', '=', '%']
    },
    correctAnswer: 2,
    explanation: {
      en: 'The "=" operator is used for assignment in C#.',
      ar: 'المعامل "=" يُستخدم لإسناد القيم في C#.'
    }
  },
  {
    id: 'prog23',
    question: {
      en: 'What will be the result of the following operation in C# if the type is int? ```csharp\nint result = 7 / 2;\n```',
      ar: 'ما هي نتيجة العملية التالية في C# إذا كان النوع int؟ ```csharp\nint result = 7 / 2;\n```'
    },
    options: {
      en: ['3.5', '4', '3', 'Error'],
      ar: ['3.5', '4', '3', 'خطأ']
    },
    correctAnswer: 2,
    explanation: {
      en: 'Since both operands are integers, the result is an integer (3), discarding the decimal part.',
      ar: 'بما أن كلا المعاملين عددان صحيحان، فستكون النتيجة عددًا صحيحًا (3)، مع تجاهل الجزء العشري.'
    }
  },
  {
    id: 'prog24',
    question: {
      en: 'Which of the following is a logical operator in C#?',
      ar: 'أي من العمليات التالية تُعتبر من العمليات المنطقية في C#؟'
    },
    options: {
      en: ['>', '&&', '*', '+='],
      ar: ['>', '&&', '*', '+=']
    },
    correctAnswer: 1,
    explanation: {
      en: 'The "&&" operator is a logical AND operator.',
      ar: 'المعامل "&&" هو معامل منطقي يمثل "AND".'
    }
  },
  {
    id: 'prog25',
    question: {
      en: 'What will be the output of the following code? ```csharp\nint num = 10;\nnum++;\nConsole.WriteLine(num);\n```',
      ar: 'ما هي النتيجة عند تنفيذ الكود التالي؟ ```csharp\nint num = 10;\nnum++;\nConsole.WriteLine(num);\n```'
    },
    options: {
      en: ['9', '10', '11', 'Error'],
      ar: ['9', '10', '11', 'خطأ']
    },
    correctAnswer: 2,
    explanation: {
      en: 'The "++" operator increments the value by 1, so the output will be 11.',
      ar: 'المعامل "++" يزيد القيمة بمقدار 1، لذا ستكون النتيجة 11.'
    }
  },
  {
    id: 'prog26',
    question: {
      en: 'What is the result of the operation 10 % 3?',
      ar: 'ما هي نتيجة العملية 10 % 3؟'
    },
    options: {
      en: ['1', '3', '0', 'Error'],
      ar: ['1', '3', '0', 'خطأ']
    },
    correctAnswer: 0,
    explanation: {
      en: 'The modulus operator "%" returns the remainder of division, which is 1.',
      ar: 'معامل باقي القسمة "%" يعيد الباقي من القسمة، وهو 1.'
    }
  },
  {
    id: 'prog27',
    question: {
      en: 'Which operator is used for type conversion in C#?',
      ar: 'أي من العمليات التالية تُستخدم للتحويل بين الأنواع في C#؟'
    },
    options: {
      en: ['+', '(type)', '+=', '&&'],
      ar: ['+', '(type)', '+=', '&&']
    },
    correctAnswer: 1,
    explanation: {
      en: 'The "(type)" operator is used for explicit type conversion.',
      ar: 'المعامل "(type)" يُستخدم للتحويل الصريح بين الأنواع.'
    }
  },
  {
    id: 'prog28',
    question: {
      en: 'What is the difference between ++x and x++?',
      ar: 'ما الفرق بين ++x و x++؟'
    },
    options: {
      en: [
        'They always produce the same result.',
        '++x increments before usage, while x++ increments after usage.',
        '++x is for integers and x++ is for floating-point numbers.',
        'x++ increments before usage, while ++x increments after usage.'
      ],
      ar: [
        'كلاهما يعطي نفس النتيجة دائمًا.',
        '++x يزيد القيمة قبل الاستخدام، بينما x++ يزيد القيمة بعد الاستخدام.',
        '++x خاص بالأعداد الصحيحة و x++ خاص بالأعداد العشرية.',
        'x++ يزيد القيمة قبل الاستخدام، بينما ++x يزيد القيمة بعد الاستخدام.'
      ]
    },
    correctAnswer: 1,
    explanation: {
      en: 'The prefix (++) increases the value before it is used, while the postfix (++) increases it after it is used.',
      ar: 'المعامل (++x) يزيد القيمة قبل استخدامها، بينما المعامل (x++) يزيدها بعد الاستخدام.'
    }
  },
  {
    id: 'prog29',
    question: {
      en: 'What happens when executing 7 / 0 if the type is int?',
      ar: 'ماذا يحدث عند تنفيذ 7 / 0 إذا كان النوع int؟'
    },
    options: {
      en: ['Prints Infinity', 'Prints 0', 'Throws an exception', 'Prints NaN'],
      ar: ['يتم طباعة Infinity', 'يتم طباعة 0', 'يحدث خطأ برمجي (استثناء)', 'يتم طباعة NaN']
    },
    correctAnswer: 2,
    explanation: {
      en: 'Dividing an integer by zero throws a runtime exception.',
      ar: 'القسمة على الصفر عند استخدام الأعداد الصحيحة تؤدي إلى استثناء وقت التشغيل.'
    }
  },
  // Lecture 5 - Chapter 5
  {
    "id": "prog30",
    "question": {
      "en": "What is the main difference between if-else and switch statements?",
      "ar": "ما الفرق الرئيسي بين الجمل الشرطية if-else و switch؟"
    },
    "options": {
      "en": [
        "if-else is faster than switch",
        "switch is only used for boolean expressions",
        "switch is optimized for multiple conditions with constant values",
        "if-else cannot handle multiple conditions"
      ],
      "ar": [
        "if-else أسرع من switch",
        "يستخدم switch فقط للتعبيرات المنطقية",
        "يتم تحسين switch للتعامل مع شروط متعددة بقيم ثابتة",
        "if-else لا يمكنه التعامل مع عدة شروط"
      ]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "The switch statement is optimized for multiple constant conditions, whereas if-else is more flexible but less optimized for such cases.",
      "ar": "يتم تحسين جملة switch للحالات التي تحتوي على قيم ثابتة متعددة، بينما if-else أكثر مرونة ولكنها أقل كفاءة في هذه الحالات."
    }
  },
  {
    "id": "prog31",
    "question": {
      "en": "What happens if a break statement is omitted in a switch case?",
      "ar": "ماذا يحدث إذا تم حذف جملة break داخل switch case؟"
    },
    "options": {
      "en": [
        "Only the matching case executes",
        "The program crashes",
        "Execution continues to the next case",
        "The default case is executed immediately"
      ],
      "ar": [
        "يتم تنفيذ الحالة المطابقة فقط",
        "يتوقف البرنامج عن العمل",
        "يستمر التنفيذ إلى الحالة التالية",
        "يتم تنفيذ الحالة الافتراضية مباشرة"
      ]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "If a break statement is omitted, execution continues to the next case (fall-through behavior).",
      "ar": "إذا تم حذف break، فسيستمر التنفيذ إلى الحالة التالية (سلوك التتابع)."
    }
  },
  {
    "id": "prog32",
    "question": {
      "en": "What will be the output of the following code? ```csharp\nint x = 10;\nif (x > 0) {\n  Console.WriteLine(\"Positive\");\n} else if (x < 0) {\n  Console.WriteLine(\"Negative\");\n} else {\n  Console.WriteLine(\"Zero\");\n}\n```",
      "ar": "ما هو ناتج الكود التالي؟ ```csharp\nint x = 10;\nnif (x > 0) {\n  Console.WriteLine(\"Positive\");\n} else if (x < 0) {\n  Console.WriteLine(\"Negative\");\n} else {\n  Console.WriteLine(\"Zero\");\n}\n```"
    },
    "options": {
      "en": ["Positive", "Negative", "Zero", "Error"],
      "ar": ["موجب", "سالب", "صفر", "خطأ"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Since x = 10, the condition (x > 0) is true, so 'Positive' is printed.",
      "ar": "بما أن x = 10، فإن الشرط (x > 0) صحيح، لذا تتم طباعة 'موجب'."
    }
  },
  {
    "id": "prog33",
    "question": {
      "en": "What is the purpose of the default case in a switch statement?",
      "ar": "ما هو الغرض من الحالة الافتراضية default في جملة switch؟"
    },
    "options": {
      "en": [
        "It is executed when no case matches",
        "It terminates the switch statement",
        "It replaces the break statement",
        "It is mandatory in every switch statement"
      ],
      "ar": [
        "يتم تنفيذها عندما لا تتطابق أي حالة",
        "تنهي جملة switch",
        "تحل محل جملة break",
        "يجب أن تكون موجودة في كل جملة switch"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "The default case executes when none of the cases match the switch expression.",
      "ar": "يتم تنفيذ الحالة الافتراضية عندما لا تتطابق أي من الحالات مع تعبير switch."
    }
  },
  {
    "id": "prog33",
    "question": {
      "en": "What will be the output of the following code? ```csharp\nConsole.WriteLine(5 == \"5\");\nConsole.WriteLine(5 === \"5\");\n```",
      "ar": "ما هو ناتج الكود التالي؟ ```csharp\nConsole.WriteLine(5 == \"5\");\nConsole.WriteLine(5 === \"5\");\n```"
    },
    "options": {
      "en": ["true, true", "true, false", "false, true", "false, false"],
      "ar": ["true, true", "true, false", "false, true", "false, false"]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "The '==' operator compares values after type conversion, so 5 == '5' is true. The '===' operator checks both value and type, so 5 === '5' is false.",
      "ar": "المعامل '==' يقارن القيم بعد تحويل النوع، لذا فإن 5 == '5' تعطي true. بينما '===' يقارن القيم والنوع معًا، لذا فإن 5 === '5' تعطي false."
    }
  },
  {
    "id": "prog34",
    "question": {
      "en": "What happens when executing the following code? ```csharp\int result = 7 / 0;\nConsole.WriteLine(result);\n```",
      "ar": "ماذا يحدث عند تنفيذ الكود التالي؟ ```csharp\int result = 7 / 0;\nConsole.WriteLine(result);\n```"
    },
    "options": {
      "en": ["Prints Infinity", "Prints 0", "Throws an exception", "Prints NaN"],
      "ar": ["يتم طباعة Infinity", "يتم طباعة 0", "يحدث خطأ برمجي (استثناء)", "يتم طباعة NaN"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "In csharp, dividing a number by zero results in Infinity.",
      "ar": "في csharp، قسمة عدد على الصفر تعطي Infinity."
    }
  },
  // Lecture 6 - Chapter 6
  {
    "id": "prog35",
    "question": {
      "en": "What is the output of the following code? ```csharp\nint count = 3;\nwhile (count > 0) {\n    Console.WriteLine(\"Iteration: \" + count);\n    count--;\n}```",
      "ar": "ما هو الإخراج المتوقع عند تنفيذ الكود التالي؟ ```csharp\nint count = 3;\nwhile (count > 0) {\n    Console.WriteLine(\"Iteration: \" + count);\n    count--;\n}```"
    },
    "options": {
      "en": ["Iteration: 3, Iteration: 2, Iteration: 1", "Iteration: 1, Iteration: 2, Iteration: 3", "Infinite loop", "Error"],
      "ar": ["Iteration: 3, Iteration: 2, Iteration: 1", "Iteration: 1, Iteration: 2, Iteration: 3", "حلقة لا نهائية", "خطأ في الكود"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "The loop decrements count each iteration, so it prints from 3 to 1.",
      "ar": "الحلقة تقوم بإنقاص المتغير count في كل تكرار، لذا سيتم الطباعة من 3 إلى 1."
    }
  },
  {
    "id": "prog36",
    "question": {
      "en": "What is the difference between `while` and `do-while` loops?",
      "ar": "ما الفرق بين حلقة `while` و `do-while`؟"
    },
    "options": {
      "en": ["`while` checks the condition before execution, `do-while` checks after execution", "`do-while` does not require a condition", "`while` always runs at least once", "`do-while` does not use variables"],
      "ar": ["`while` تتحقق من الشرط قبل التنفيذ، أما `do-while` فتتحقق بعد التنفيذ", "`do-while` لا تحتاج إلى شرط", "`while` تعمل مرة واحدة على الأقل", "`do-while` لا تستخدم المتغيرات"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "The `while` loop checks the condition first, while `do-while` executes once before checking the condition.",
      "ar": "تتحقق `while` من الشرط قبل التنفيذ، بينما تنفذ `do-while` مرة واحدة قبل التحقق من الشرط."
    }
  },
  {
    "id": "prog37",
    "question": {
      "en": "How many times does the following loop execute? ```csharp\nfor (int i = 1; i <= 5; i++) {\n    Console.WriteLine(i);\n}```",
      "ar": "كم عدد مرات تنفيذ الحلقة التالية؟ ```csharp\nfor (int i = 1; i <= 5; i++) {\n    Console.WriteLine(i);\n}```"
    },
    "options": {
      "en": ["4 times", "5 times", "6 times", "Infinite loop"],
      "ar": ["4 مرات", "5 مرات", "6 مرات", "حلقة لا نهائية"]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "The loop runs from 1 to 5, so it executes 5 times.",
      "ar": "الحلقة تبدأ من 1 إلى 5، لذا يتم تنفيذها 5 مرات."
    }
  },
  {
    "id": "prog38",
    "question": {
      "en": "What will be the output of the following code? ```csharp\nint x = 3;\ndo {\n    Console.WriteLine(\"Hello\");\n    x--;\n} while (x > 0);```",
      "ar": "ما هو الإخراج المتوقع عند تنفيذ الكود التالي؟ ```csharp\nint x = 3;\ndo {\n    Console.WriteLine(\"Hello\");\n    x--;\n} while (x > 0);```"
    },
    "options": {
      "en": ["Prints 'Hello' 2 times", "Prints 'Hello' 3 times", "Infinite loop", "Error"],
      "ar": ["يتم طباعة 'Hello' مرتين", "يتم طباعة 'Hello' ثلاث مرات", "حلقة لا نهائية", "خطأ في الكود"]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "The loop runs 3 times because it starts with x = 3 and decrements until x becomes 0.",
      "ar": "تعمل الحلقة 3 مرات لأنها تبدأ بالقيمة 3 ثم تنقص حتى تصل إلى 0."
    }
  },
  {
    "id": "prog39",
    "question": {
      "en": "```important\nI don't know if we asked this question in the section or not, but it was already explained to Dr. Majid.\n``` What will be the output of the following code? ```csharp\nint[] numbers = {2, 4, 6};\nforeach (int num in numbers) {\n    Console.Write(num + \" \");\n}```",
      "ar": "```important\nالسؤال تقريبا مأخدناهوش في السكاشن، لكن اخدناه في محاضرة دكتور ماجد، ذاكرها احتياطي\n``` ما هو الإخراج المتوقع عند تنفيذ الكود التالي؟ ```csharp\nint[] numbers = {2, 4, 6};\nforeach (int num in numbers) {\n    Console.Write(num + \" \");\n}```"
    },
    "options": {
      "en": ["2 4 6", "6 4 2", "2 4", "Error"],
      "ar": ["2 4 6", "6 4 2", "2 4", "خطأ"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "The foreach loop iterates through all elements in the array in order, printing 2, 4, and 6.",
      "ar": "تقوم حلقة foreach بالمرور على جميع عناصر المصفوفة بالترتيب، لذا ستتم طباعة 2، 4، و6."
    }
  },
  {
    "id": "prog40",
    "question": {
      "en": "What is the output of the following code? ```csharp\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) break;\n    Console.Write(i + \" \");\n}```",
      "ar": "ما هو الإخراج المتوقع عند تنفيذ الكود التالي؟ ```csharp\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) break;\n    Console.Write(i + \" \");\n}```"
    },
    "options": {
      "en": ["1 2 3 4 5", "1 2", "3 4 5", "Error"],
      "ar": ["1 2 3 4 5", "1 2", "3 4 5", "خطأ"]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "The break statement stops the loop when i == 3, so it prints '1 2'.",
      "ar": "توقف جملة break الحلقة عند i == 3، لذا سيتم طباعة '1 2'."
    }
  }
];


export const mathQuestions: Question[] = [
  {
    id: 'math1',
    question: {
      en: 'Calculate the value of $\\pi r^2$ when $r = 2$',
      ar: 'احسب قيمة $\\pi r^2$ عندما $r = 2$'
    },
    options: {
      en: ['$12.57$', '$6.28$', '$4\\pi$', '$\\pi$'],
      ar: ['$12.57$', '$6.28$', '$4\\pi$', '$\\pi$']
    },
    correctAnswer: 0,
    explanation: {
      en: 'When $r = 2$, $\\pi r^2 = \\pi \\times 2^2 = \\pi \\times 4 \\approx 12.57$',
      ar: 'عندما $r = 2$، $\\pi r^2 = \\pi \\times 2^2 = \\pi \\times 4 \\approx 12.57$'
    }
  },
  {
    id: 'math2',
    question: {
      en: 'Solve the equation: $\\sqrt{x^2 + 4x + 4} = 2$',
      ar: 'حل المعادلة: $\\sqrt{x^2 + 4x + 4} = 2$'
    },
    options: {
      en: ['$x = -2$', '$x = 0$', '$x = 2$', '$x = 4$'],
      ar: ['$x = -2$', '$x = 0$', '$x = 2$', '$x = 4$']
    },
    correctAnswer: 1,
    explanation: {
      en: 'Square both sides: $x^2 + 4x + 4 = 4$, then $x^2 + 4x = 0$, factor out $x(x + 4) = 0$, so $x = 0$ or $x = -4$',
      ar: 'نربع الطرفين: $x^2 + 4x + 4 = 4$، ثم $x^2 + 4x = 0$، نخرج العامل المشترك $x(x + 4) = 0$، إذن $x = 0$ أو $x = -4$'
    }
  },
  {
    id: 'math3',
    question: {
      en: 'What is the derivative of $f(x) = x^3 + 2x^2 - 4x + 1$?',
      ar: 'ما هي مشتقة $f(x) = x^3 + 2x^2 - 4x + 1$؟'
    },
    options: {
      en: ['$3x^2 + 4x - 4$', '$x^2 + 4x - 4$', '$3x^2 + 2x - 4$', '$3x^2 + 4x$'],
      ar: ['$3x^2 + 4x - 4$', '$x^2 + 4x - 4$', '$3x^2 + 2x - 4$', '$3x^2 + 4x$']
    },
    correctAnswer: 0,
    explanation: {
      en: 'Using power rule: derivative of $x^3$ is $3x^2$, of $2x^2$ is $4x$, of $-4x$ is $-4$, and constant term becomes 0',
      ar: 'باستخدام قاعدة القوى: مشتقة $x^3$ هي $3x^2$، و $2x^2$ هي $4x$، و $-4x$ هي $-4$، والثابت يصبح 0'
    }
  },
  {
    id: 'math4',
    question: {
      en: 'Solve the system of equations:\n$2x + y = 5$\n$x - y = 1$',
      ar: 'حل نظام المعادلات:\n$2x + y = 5$\n$x - y = 1$'
    },
    options: {
      en: ['$x = 2, y = 1$', '$x = 1, y = 3$', '$x = 2, y = -1$', '$x = 3, y = -1$'],
      ar: ['$x = 2, y = 1$', '$x = 1, y = 3$', '$x = 2, y = -1$', '$x = 3, y = -1$']
    },
    correctAnswer: 0,
    explanation: {
      en: 'Add the equations: $3x = 6$ so $x = 2$. Substitute back to find $y = 1$',
      ar: 'نجمع المعادلتين: $3x = 6$ إذن $x = 2$. نعوض للحصول على $y = 1$'
    }
  }
];

export const scienceQuestions: Question[] = [
  {
    id: 'sci1',
    question: {
      en: 'The equation for kinetic energy is $E_k = \\frac{1}{2}mv^2$. Calculate the kinetic energy when $m = 2\\text{ kg}$ and $v = 3\\text{ m/s}$',
      ar: 'معادلة الطاقة الحركية هي $E_k = \\frac{1}{2}mv^2$. احسب الطاقة الحركية عندما $m = 2\\text{ kg}$ و $v = 3\\text{ m/s}$'
    },
    options: {
      en: ['$9\\text{ J}$', '$6\\text{ J}$', '$12\\text{ J}$', '$3\\text{ J}$'],
      ar: ['$9\\text{ J}$', '$6\\text{ J}$', '$12\\text{ J}$', '$3\\text{ J}$']
    },
    correctAnswer: 0,
    explanation: {
      en: '$E_k = \\frac{1}{2} \\times 2 \\times 3^2 = \\frac{1}{2} \\times 2 \\times 9 = 9\\text{ J}$',
      ar: '$E_k = \\frac{1}{2} \\times 2 \\times 3^2 = \\frac{1}{2} \\times 2 \\times 9 = 9\\text{ J}$'
    }
  },
  {
    id: 'sci2',
    question: {
      en: 'The speed of light is approximately $c = 3 \\times 10^8\\text{ m/s}$. Using Einstein\'s equation $E = mc^2$, calculate the energy when $m = 1\\text{ kg}$',
      ar: 'سرعة الضوء تقريباً $c = 3 \\times 10^8\\text{ m/s}$. باستخدام معادلة أينشتاين $E = mc^2$، احسب الطاقة عندما $m = 1\\text{ kg}$'
    },
    options: {
      en: ['$9 \\times 10^{16}\\text{ J}$', '$3 \\times 10^8\\text{ J}$', '$6 \\times 10^8\\text{ J}$', '$3 \\times 10^{16}\\text{ J}$'],
      ar: ['$9 \\times 10^{16}\\text{ J}$', '$3 \\times 10^8\\text{ J}$', '$6 \\times 10^8\\text{ J}$', '$3 \\times 10^{16}\\text{ J}$']
    },
    correctAnswer: 0,
    explanation: {
      en: '$E = 1 \\times (3 \\times 10^8)^2 = 9 \\times 10^{16}\\text{ J}$',
      ar: '$E = 1 \\times (3 \\times 10^8)^2 = 9 \\times 10^{16}\\text{ J}$'
    }
  },
  {
    id: 'sci3',
    question: {
      en: 'What is the pH of a solution with hydrogen ion concentration $[H^+] = 1 \\times 10^{-3}\\text{ M}$?',
      ar: 'ما هو الرقم الهيدروجيني لمحلول تركيز أيون الهيدروجين فيه $[H^+] = 1 \\times 10^{-3}\\text{ M}$؟'
    },
    options: {
      en: ['3', '4', '-3', '7'],
      ar: ['3', '4', '-3', '7']
    },
    correctAnswer: 0,
    explanation: {
      en: 'pH = $-\\log[H^+] = -\\log(1 \\times 10^{-3}) = 3$',
      ar: 'pH = $-\\log[H^+] = -\\log(1 \\times 10^{-3}) = 3$'
    }
  },
  {
    id: 'sci4',
    question: {
      en: 'Calculate the force using Newton\'s law $F = ma$ when mass $m = 4\\text{ kg}$ and acceleration $a = 2\\text{ m/s}^2$',
      ar: 'احسب القوة باستخدام قانون نيوتن $F = ma$ عندما الكتلة $m = 4\\text{ kg}$ والتسارع $a = 2\\text{ m/s}^2$'
    },
    options: {
      en: ['$8\\text{ N}$', '$6\\text{ N}$', '$10\\text{ N}$', '$4\\text{ N}$'],
      ar: ['$8\\text{ N}$', '$6\\text{ N}$', '$10\\text{ N}$', '$4\\text{ N}$']
    },
    correctAnswer: 0,
    explanation: {
      en: '$F = 4 \\times 2 = 8\\text{ N}$',
      ar: '$F = 4 \\times 2 = 8\\text{ N}$'
    }
  }
];

export const generalKnowledgeQuestions: Question[] = [
  {
    "id": "gk1",
    "question": {
      "en": "What is Social Informatics?",
      "ar": "ما هي المعلوماتية الاجتماعية؟"
    },
    "options": {
      "en": ["Study of technology in society", "A type of programming", "A social media platform", "A marketing strategy"],
      "ar": ["دراسة تأثير التكنولوجيا في المجتمع", "نوع من البرمجة", "منصة تواصل اجتماعي", "استراتيجية تسويقية"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Social Informatics studies the impact of technology and information on society and organizations.",
      "ar": "المعلوماتية الاجتماعية تدرس تأثير التكنولوجيا والمعلومات على المجتمع والتنظيمات."
    }
  },
  {
    "id": "gk2",
    "question": {
      "en": "Which society relies on knowledge and information for development?",
      "ar": "أي مجتمع يعتمد على المعرفة والمعلومات للتنمية؟"
    },
    "options": {
      "en": ["Agricultural Society", "Industrial Society", "Information Society", "Tribal Society"],
      "ar": ["المجتمع الزراعي", "المجتمع الصناعي", "مجتمع المعلومات", "المجتمع القبلي"]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "Information Society uses knowledge and information as key drivers for economic and social development.",
      "ar": "مجتمع المعلومات يستخدم المعرفة والمعلومات كمحركات أساسية للتنمية الاقتصادية والاجتماعية."
    }
  },
  {
    "id": "gk3",
    "question": {
      "en": "What does Web 2.0 contribute to social networks?",
      "ar": "ما هو دور الجيل الثاني من الويب (Web 2.0) في الشبكات الاجتماعية؟"
    },
    "options": {
      "en": ["Enhancing interactivity", "Providing static websites", "Limiting user access", "Eliminating social media"],
      "ar": ["تعزيز التفاعل", "تقديم مواقع ثابتة", "تقييد وصول المستخدم", "إلغاء وسائل التواصل الاجتماعي"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Web 2.0 enables greater interaction and user-generated content on social networks.",
      "ar": "يساهم Web 2.0 في تعزيز التفاعل وتمكين المستخدمين من إنشاء المحتوى على الشبكات الاجتماعية."
    }
  },
  {
    "id": "gk4",
    "question": {
      "en": "What is a Virtual Community?",
      "ar": "ما هو المجتمع الافتراضي؟"
    },
    "options": {
      "en": ["A physical neighborhood", "A community that interacts online", "A local government group", "A traditional gathering place"],
      "ar": ["حي سكني", "مجتمع يتفاعل عبر الإنترنت", "مجموعة حكومية محلية", "مكان تجمع تقليدي"]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "A Virtual Community is an online social group where members interact regardless of location.",
      "ar": "المجتمع الافتراضي هو مجموعة اجتماعية عبر الإنترنت يتفاعل أعضاؤها بغض النظر عن الموقع الجغرافي."
    }
  },
  {
    "id": "gk5",
    "question": {
      "en": "What is Social Navigation?",
      "ar": "ما هي الملاحة الاجتماعية؟"
    },
    "options": {
      "en": ["Using maps to navigate", "GPS tracking only", "Using shared data for navigation", "A type of transportation system"],
      "ar": ["استخدام الخرائط للتنقل", "تتبع GPS فقط", "استخدام البيانات المشتركة للملاحة", "نوع من أنظمة النقل"]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "Social Navigation uses user-generated data to provide better navigation insights.",
      "ar": "الملاحة الاجتماعية تستخدم البيانات التي يشاركها المستخدمون لإنشاء خرائط دقيقة للمواقع والطرق."
    }
  },
  {
    "id": "gk6",
    "question": {
      "en": "What does Information Literacy involve?",
      "ar": "ماذا يشمل الوعي المعلوماتي؟"
    },
    "options": {
      "en": ["Reading books only", "The ability to search, evaluate, and use information effectively", "Using social media", "Programming knowledge"],
      "ar": ["قراءة الكتب فقط", "القدرة على البحث وتقييم واستخدام المعلومات بفعالية", "استخدام وسائل التواصل الاجتماعي", "معرفة البرمجة"]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Information Literacy is the ability to find, evaluate, and effectively use information.",
      "ar": "الوعي المعلوماتي هو القدرة على البحث عن المعلومات وتقييمها واستخدامها بفعالية."
    }
  },
  {
    "id": "gk7",
    "question": {
      "en": "Which of the following is considered an Informatics Crime?",
      "ar": "أي من التالي يعتبر جريمة معلوماتية؟"
    },
    "options": {
      "en": ["Hacking", "Reading emails", "Watching online videos", "Playing video games"],
      "ar": ["الاختراق", "قراءة البريد الإلكتروني", "مشاهدة الفيديوهات على الإنترنت", "لعب ألعاب الفيديو"]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Hacking is a cybercrime where unauthorized access is gained to a system.",
      "ar": "الاختراق هو جريمة إلكترونية يتم فيها الوصول غير المصرح به إلى نظام معين."
    }
  },
  {
    "id": "gk8",
    "question": {
      "en": "What is the main purpose of an Information Society?",
      "ar": "ما هو الهدف الرئيسي لمجتمع المعلومات؟"
    },
    "options": {
      "en": ["Producing goods", "Spreading misinformation", "Using knowledge and information for growth", "Avoiding technology"],
      "ar": ["إنتاج السلع", "نشر المعلومات الخاطئة", "استخدام المعرفة والمعلومات للنمو", "تجنب التكنولوجيا"]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "An Information Society focuses on utilizing knowledge and information for development.",
      "ar": "يركز مجتمع المعلومات على استخدام المعرفة والمعلومات لتحقيق التنمية."
    }
  },
  {
    "id": "gk9",
    "question": {
      "en": "How can an Information Society protect itself from cyber threats?",
      "ar": "كيف يمكن لمجتمع المعلومات أن يحمي نفسه من التهديدات الإلكترونية؟"
    },
    "options": {
      "en": ["Ignoring security risks", "Implementing cybersecurity measures", "Avoiding the internet", "Using outdated systems"],
      "ar": ["تجاهل مخاطر الأمن", "تطبيق تدابير الأمن السيبراني", "تجنب استخدام الإنترنت", "استخدام أنظمة قديمة"]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Cybersecurity measures are essential for protecting an Information Society from threats.",
      "ar": "تعتبر تدابير الأمن السيبراني ضرورية لحماية مجتمع المعلومات من التهديدات."
    }
  },
  {
    "id": "gk10",
    "question": {
      "en": "What is the digital divide?",
      "ar": "ما المقصود بالفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "The gap between rich and poor countries",
        "The difference in access to technology",
        "The development of artificial intelligence",
        "The use of social media"
      ],
      "ar": [
        "الفجوة بين الدول الغنية والفقيرة",
        "الاختلاف في الوصول إلى التكنولوجيا",
        "تطور الذكاء الاصطناعي",
        "استخدام وسائل التواصل الاجتماعي"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "The digital divide refers to the difference in access to and use of technology between individuals, societies, or countries.",
      "ar": "تشير الفجوة الرقمية إلى الاختلاف في الوصول إلى واستخدام التكنولوجيا بين الأفراد أو المجتمعات أو الدول."
    }
  },
  {
    "id": "gk11",
    "question": {
      "en": "Which of the following is a technological cause of the digital divide?",
      "ar": "أي من العوامل التالية يعد سببًا تكنولوجيًا للفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "High cost of technology",
        "Lack of digital literacy",
        "Government policies",
        "Economic crises"
      ],
      "ar": [
        "ارتفاع تكلفة التكنولوجيا",
        "نقص الثقافة الرقمية",
        "السياسات الحكومية",
        "الأزمات الاقتصادية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "The high cost of technology makes it difficult for individuals and countries to access and use it, increasing the digital divide.",
      "ar": "يؤدي ارتفاع تكلفة التكنولوجيا إلى صعوبة الوصول إليها واستخدامها، مما يزيد من الفجوة الرقمية."
    }
  },
  {
    "id": "gk12",
    "question": {
      "en": "How does illiteracy contribute to the digital divide?",
      "ar": "كيف تساهم الأمية في زيادة الفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "By making it harder to use digital tools",
        "By reducing the cost of internet access",
        "By increasing employment opportunities",
        "By improving cybersecurity awareness"
      ],
      "ar": [
        "من خلال جعل استخدام الأدوات الرقمية أكثر صعوبة",
        "عن طريق تقليل تكلفة الوصول إلى الإنترنت",
        "من خلال زيادة فرص التوظيف",
        "من خلال تحسين الوعي بالأمن السيبراني"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Illiteracy prevents people from understanding and using digital tools, limiting their ability to benefit from technology.",
      "ar": "تمنع الأمية الأفراد من فهم واستخدام الأدوات الرقمية، مما يحد من قدرتهم على الاستفادة من التكنولوجيا."
    }
  },
  {
    "id": "gk13",
    "question": {
      "en": "Which of the following is NOT a factor contributing to the digital divide?",
      "ar": "أي من العوامل التالية ليس سببًا في الفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "Limited access to the internet",
        "High levels of digital literacy",
        "Economic disparities",
        "Government censorship"
      ],
      "ar": [
        "الوصول المحدود إلى الإنترنت",
        "ارتفاع مستويات الثقافة الرقمية",
        "التفاوت الاقتصادي",
        "الرقابة الحكومية"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "High levels of digital literacy reduce the digital divide rather than contributing to it.",
      "ar": "ارتفاع مستويات الثقافة الرقمية يقلل من الفجوة الرقمية بدلاً من زيادتها."
    }
  },
  {
    "id": "gk14",
    "question": {
      "en": "What is one way developing countries can reduce the digital divide?",
      "ar": "ما أحد الطرق التي يمكن أن تقلل بها الدول النامية الفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "Increasing the cost of internet access",
        "Investing in digital education",
        "Limiting technology imports",
        "Reducing internet speed"
      ],
      "ar": [
        "زيادة تكلفة الوصول إلى الإنترنت",
        "الاستثمار في التعليم الرقمي",
        "تقليل استيراد التكنولوجيا",
        "خفض سرعة الإنترنت"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Investing in digital education helps people acquire the necessary skills to use technology effectively, reducing the digital divide.",
      "ar": "يساعد الاستثمار في التعليم الرقمي الأفراد على اكتساب المهارات اللازمة لاستخدام التكنولوجيا بفعالية، مما يقلل من الفجوة الرقمية."
    }
  },
  {
    "id": "gk15",
    "question": {
      "en": "Which sector is most affected by the digital divide?",
      "ar": "أي قطاع يتأثر أكثر بالفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "Healthcare",
        "Agriculture",
        "Education",
        "Tourism"
      ],
      "ar": [
        "الرعاية الصحية",
        "الزراعة",
        "التعليم",
        "السياحة"
      ]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "Education is heavily affected by the digital divide as students without internet access struggle to keep up with digital learning.",
      "ar": "يتأثر التعليم بشكل كبير بالفجوة الرقمية، حيث يواجه الطلاب الذين لا يمتلكون وصولًا إلى الإنترنت صعوبة في متابعة التعلم الرقمي."
    }
  },
  {
    "id": "gk16",
    "question": {
      "en": "Which international organization promotes digital inclusion?",
      "ar": "أي منظمة دولية تدعم الشمول الرقمي؟"
    },
    "options": {
      "en": [
        "World Bank",
        "United Nations",
        "World Health Organization",
        "International Telecommunication Union"
      ],
      "ar": [
        "البنك الدولي",
        "الأمم المتحدة",
        "منظمة الصحة العالمية",
        "الاتحاد الدولي للاتصالات"
      ]
    },
    "correctAnswer": 3,
    "explanation": {
      "en": "The International Telecommunication Union (ITU) works on bridging the digital divide by promoting equal access to technology.",
      "ar": "يعمل الاتحاد الدولي للاتصالات (ITU) على تقليص الفجوة الرقمية من خلال تعزيز الوصول المتساوي إلى التكنولوجيا."
    }
  },
  {
    "id": "gk17",
    "question": {
      "en": "What is the role of 5G technology in reducing the digital divide?",
      "ar": "ما دور تقنية 5G في تقليل الفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "It reduces internet costs",
        "It provides faster internet access in rural areas",
        "It replaces traditional education",
        "It eliminates digital illiteracy"
      ],
      "ar": [
        "تقلل من تكاليف الإنترنت",
        "توفر وصولًا أسرع للإنترنت في المناطق الريفية",
        "تحل محل التعليم التقليدي",
        "تقضي على الأمية الرقمية"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "5G can help bridge the digital divide by providing faster internet access in underserved areas.",
      "ar": "يمكن أن تساعد تقنية 5G في تقليص الفجوة الرقمية من خلال توفير وصول أسرع إلى الإنترنت في المناطق غير المخدومة."
    }
  },
  {
    "id": "gk18",
    "question": {
      "en": "What is a major economic consequence of the digital divide?",
      "ar": "ما هو أحد الآثار الاقتصادية الكبرى للفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "Increased employment opportunities",
        "Wider economic inequality",
        "More global trade",
        "Stronger local economies"
      ],
      "ar": [
        "زيادة فرص التوظيف",
        "اتساع الفجوة الاقتصادية",
        "زيادة التجارة العالمية",
        "تقوية الاقتصادات المحلية"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "The digital divide widens economic inequality as those without access to technology miss out on job and education opportunities.",
      "ar": "توسع الفجوة الرقمية التفاوت الاقتصادي حيث يفقد الأفراد الذين لا يمتلكون وصولًا إلى التكنولوجيا فرص العمل والتعليم."
    }
  },
  {
    "id": "gk19",
    "question": {
      "en": "Which of the following is a digital literacy skill?",
      "ar": "أي من المهارات التالية يعتبر من مهارات الثقافة الرقمية؟"
    },
    "options": {
      "en": [
        "Reading a newspaper",
        "Using a search engine effectively",
        "Driving a car",
        "Cooking a meal"
      ],
      "ar": [
        "قراءة الجريدة",
        "استخدام محرك البحث بفعالية",
        "قيادة السيارة",
        "طهي الطعام"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Digital literacy includes skills like using search engines to find reliable information online.",
      "ar": "تشمل الثقافة الرقمية مهارات مثل استخدام محركات البحث للعثور على معلومات موثوقة عبر الإنترنت."
    }
  },
  {
    "id": "gk20",
    "question": {
      "en": "What is the term for government-led programs to provide internet access to rural areas?",
      "ar": "ما هو المصطلح المستخدم للبرامج الحكومية التي توفر الوصول إلى الإنترنت في المناطق الريفية؟"
    },
    "options": {
      "en": [
        "Digital Inclusion Initiatives",
        "Internet Tax Programs",
        "Cybersecurity Policies",
        "Cloud Computing Strategies"
      ],
      "ar": [
        "مبادرات الشمول الرقمي",
        "برامج ضرائب الإنترنت",
        "سياسات الأمن السيبراني",
        "استراتيجيات الحوسبة السحابية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Digital Inclusion Initiatives are programs designed to provide equal internet access to underserved communities.",
      "ar": "مبادرات الشمول الرقمي هي برامج تهدف إلى توفير وصول متساوٍ إلى الإنترنت للمجتمعات غير المخدومة."
    }
  },
  {
    "id": "gk21",
    "question": {
      "en": "How does e-learning help bridge the digital divide?",
      "ar": "كيف يساعد التعلم الإلكتروني في تقليل الفجوة الرقمية؟"
    },
    "options": {
      "en": [
        "By making education more expensive",
        "By providing access to online courses",
        "By reducing internet speed",
        "By limiting access to knowledge"
      ],
      "ar": [
        "من خلال جعل التعليم أكثر تكلفة",
        "من خلال توفير الوصول إلى الدورات عبر الإنترنت",
        "من خلال تقليل سرعة الإنترنت",
        "من خلال الحد من الوصول إلى المعرفة"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "E-learning helps by offering educational resources online, making knowledge accessible to more people.",
      "ar": "يساعد التعلم الإلكتروني من خلال تقديم موارد تعليمية عبر الإنترنت، مما يجعل المعرفة متاحة لعدد أكبر من الأفراد."
    }
  },
  {
    "id": "gk22",
    "question": {
      "en": "Which technology can provide internet access in remote areas?",
      "ar": "أي تقنية يمكنها توفير الوصول إلى الإنترنت في المناطق النائية؟"
    },
    "options": {
      "en": [
        "Fiber optics",
        "Satellite internet",
        "Local Wi-Fi networks",
        "Traditional telephones"
      ],
      "ar": [
        "الألياف الضوئية",
        "الإنترنت عبر الأقمار الصناعية",
        "شبكات الواي فاي المحلية",
        "الهواتف التقليدية"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Satellite internet allows remote areas to connect to the internet without traditional infrastructure.",
      "ar": "يتيح الإنترنت عبر الأقمار الصناعية للمناطق النائية الاتصال بالإنترنت دون الحاجة إلى بنية تحتية تقليدية."
    }
  }
];

export const personalCommunication: Question[] = [
  {
    // Chapter 1
    "id": "pc1",
    "question": {
      "en": "What is personal branding?",
      "ar": "ما هو التسويق الشخصي؟"
    },
    "options": {
      "en": [
        "A way to market products",
        "A process of managing one's personal image strategically",
        "A temporary self-promotion method",
        "A type of corporate branding"
      ],
      "ar": [
        "طريقة لتسويق المنتجات",
        "عملية إدارة الصورة الشخصية بشكل استراتيجي",
        "طريقة مؤقتة للترويج الذاتي",
        "نوع من العلامات التجارية للشركات"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Personal branding is the process of strategically managing one’s personal image to achieve professional and personal goals.",
      "ar": "التسويق الشخصي هو عملية إدارة الصورة الشخصية بشكل استراتيجي لتحقيق الأهداف المهنية والشخصية."
    }
  },
  {
    "id": "pc2",
    "question": {
      "en": "How does personal branding differ from self-promotion?",
      "ar": "كيف يختلف التسويق الشخصي عن الترويج الذاتي؟"
    },
    "options": {
      "en": [
        "Self-promotion is a long-term strategy, while personal branding is short-term.",
        "Personal branding focuses on building a sustainable image, while self-promotion is more about temporary exposure.",
        "Both are the same concepts.",
        "Self-promotion is more effective than personal branding."
      ],
      "ar": [
        "الترويج الذاتي هو استراتيجية طويلة المدى، بينما التسويق الشخصي هو قصير المدى.",
        "التسويق الشخصي يركز على بناء صورة مستدامة، بينما الترويج الذاتي يهدف إلى التعرض المؤقت.",
        "كلاهما نفس المفهوم.",
        "الترويج الذاتي أكثر فعالية من التسويق الشخصي."
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Personal branding aims to create a long-term reputation, whereas self-promotion is more about immediate visibility.",
      "ar": "التسويق الشخصي يهدف إلى بناء سمعة طويلة الأمد، في حين أن الترويج الذاتي يركز على الظهور الفوري."
    }
  },
  {
    "id": "pc3",
    "question": {
      "en": "Why is building a personal brand important?",
      "ar": "لماذا يعتبر بناء العلامة الشخصية مهمًا؟"
    },
    "options": {
      "en": [
        "It helps in career growth and professional recognition.",
        "It only benefits influencers and celebrities.",
        "It is not necessary for professionals.",
        "It focuses only on social media popularity."
      ],
      "ar": [
        "يساعد في النمو المهني والاعتراف الاحترافي.",
        "يفيد فقط المؤثرين والمشاهير.",
        "ليس ضروريًا للمهنيين.",
        "يركز فقط على الشهرة في وسائل التواصل الاجتماعي."
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "A strong personal brand enhances career opportunities, credibility, and networking.",
      "ar": "العلامة الشخصية القوية تعزز الفرص المهنية والمصداقية وبناء العلاقات."
    }
  },
  {
    "id": "pc4",
    "question": {
      "en": "Which of the following is NOT a key element of personal branding?",
      "ar": "أي من العناصر التالية ليس من العناصر الأساسية في بناء العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "Authenticity",
        "Consistency",
        "Randomness",
        "Visibility"
      ],
      "ar": [
        "الأصالة",
        "الاتساق",
        "العشوائية",
        "الظهور"
      ]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "Personal branding requires authenticity, consistency, and visibility, whereas randomness weakens the brand.",
      "ar": "يتطلب بناء العلامة الشخصية الأصالة والاتساق والظهور، بينما العشوائية تضعف العلامة."
    }
  },
  {
    "id": "pc5",
    "question": {
      "en": "What role does social media play in personal branding?",
      "ar": "ما هو دور وسائل التواصل الاجتماعي في بناء العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "It has no impact on personal branding.",
        "It is the only way to build a brand.",
        "It enhances visibility and engagement with the audience.",
        "It replaces real-world networking."
      ],
      "ar": [
        "ليس لها أي تأثير على العلامة الشخصية.",
        "هي الطريقة الوحيدة لبناء العلامة.",
        "تعزز الظهور والتفاعل مع الجمهور.",
        "تحل محل التواصل الواقعي."
      ]
    },
    "correctAnswer": 2,
    "explanation": {
      "en": "Social media helps increase visibility and engagement but should be combined with offline strategies.",
      "ar": "تساعد وسائل التواصل الاجتماعي في تعزيز الظهور والتفاعل، لكنها يجب أن تُستخدم بجانب استراتيجيات أخرى."
    }
  },
  {
    "id": "pc6",
    "question": {
      "en": "Which of the following best describes authenticity in personal branding?",
      "ar": "أي من الخيارات التالية يصف الأصالة في بناء العلامة الشخصية بشكل أفضل؟"
    },
    "options": {
      "en": [
        "Pretending to be someone successful.",
        "Being true to your values and personality.",
        "Copying a famous personality.",
        "Constantly changing your brand identity."
      ],
      "ar": [
        "التظاهر بأنك شخص ناجح.",
        "أن تكون صادقًا مع قيمك وشخصيتك.",
        "نسخ شخصية مشهورة.",
        "تغيير هويتك باستمرار."
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Authenticity means staying true to your values, beliefs, and personality while building your brand.",
      "ar": "الأصالة تعني أن تكون صادقًا مع قيمك ومعتقداتك وشخصيتك أثناء بناء علامتك الشخصية."
    }
  },
  {
    "id": "pc7",
    "question": {
      "en": "What is the first step in creating a personal brand?",
      "ar": "ما هي الخطوة الأولى في بناء العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "Creating a social media account.",
        "Understanding your strengths and values.",
        "Copying a successful brand.",
        "Focusing on marketing first."
      ],
      "ar": [
        "إنشاء حساب على وسائل التواصل الاجتماعي.",
        "فهم نقاط قوتك وقيمك.",
        "نسخ علامة ناجحة.",
        "التركيز على التسويق أولًا."
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "The foundation of a strong personal brand is knowing your strengths, values, and goals.",
      "ar": "أساس العلامة الشخصية القوية هو معرفة نقاط قوتك وقيمك وأهدافك."
    }
  },
  {
    "id": "pc8",
    "question": {
      "en": "Why is consistency important in personal branding?",
      "ar": "لماذا يعتبر الاتساق مهمًا في بناء العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "It confuses the audience.",
        "It builds trust and credibility.",
        "It makes the brand less recognizable.",
        "It limits creativity."
      ],
      "ar": [
        "يؤدي إلى إرباك الجمهور.",
        "يبني الثقة والمصداقية.",
        "يجعل العلامة أقل تميزًا.",
        "يحد من الإبداع."
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Consistency helps people recognize and trust your brand over time.",
      "ar": "الاتساق يساعد الناس على التعرف على علامتك الشخصية وبناء الثقة معها بمرور الوقت."
    }
  },
  {
    "id": "pc9",
    "question": {
      "en": "Which of the following actions strengthens a personal brand?",
      "ar": "أي من الإجراءات التالية يعزز العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "Regularly sharing valuable content.",
        "Being inactive on social media.",
        "Constantly changing career paths.",
        "Avoiding networking opportunities."
      ],
      "ar": [
        "مشاركة محتوى قيم بانتظام.",
        "عدم التفاعل على وسائل التواصل الاجتماعي.",
        "تغيير المسارات المهنية باستمرار.",
        "تجنب فرص التواصل."
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Providing valuable content consistently increases credibility and strengthens personal branding.",
      "ar": "تقديم محتوى قيم بانتظام يعزز المصداقية ويقوي العلامة الشخصية."
    }
  },
  {
    "id": "pc10",
    "question": {
      "en": "How does networking impact personal branding?",
      "ar": "كيف يؤثر التواصل وبناء العلاقات على العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "It expands opportunities and enhances credibility.",
        "It has no impact on personal branding.",
        "It only helps in socializing.",
        "It makes branding less effective."
      ],
      "ar": [
        "يوسع الفرص ويعزز المصداقية.",
        "ليس له تأثير على العلامة الشخصية.",
        "يساعد فقط في العلاقات الاجتماعية.",
        "يجعل العلامة الشخصية أقل فعالية."
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Networking helps build credibility, connections, and opportunities that enhance personal branding.",
      "ar": "يساعد التواصل في بناء المصداقية والعلاقات والفرص التي تعزز العلامة الشخصية."
    }
  },
  // Chapter 2
  {
    "id": "pc11",
    "question": {
      "en": "What is SWOT analysis and what is its purpose?",
      "ar": "ما هو تحليل SWOT وما فائدته؟"
    },
    "options": {
      "en": [
        "A financial analysis method",
        "A strategic tool to assess strengths, weaknesses, opportunities, and threats",
        "A marketing strategy",
        "A way to track business expenses"
      ],
      "ar": [
        "طريقة لتحليل البيانات المالية",
        "أداة استراتيجية لتقييم نقاط القوة والضعف والفرص والتهديدات",
        "استراتيجية تسويقية",
        "طريقة لتتبع نفقات الأعمال"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "SWOT analysis is a strategic planning tool used to identify internal strengths and weaknesses, as well as external opportunities and threats.",
      "ar": "تحليل SWOT هو أداة تخطيط استراتيجي تُستخدم لتحديد نقاط القوة والضعف الداخلية، بالإضافة إلى الفرص والتهديدات الخارجية."
    }
  },
  {
    "id": "pc12",
    "question": {
      "en": "How do you identify your strengths and weaknesses?",
      "ar": "كيف تحدد نقاط قوتك وضعفك؟"
    },
    "options": {
      "en": [
        "By guessing randomly",
        "Through self-assessment and feedback",
        "By focusing only on failures",
        "By copying others"
      ],
      "ar": [
        "عن طريق التخمين العشوائي",
        "من خلال التقييم الذاتي والحصول على التغذية الراجعة",
        "بالتركيز فقط على الإخفاقات",
        "عن طريق تقليد الآخرين"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Identifying strengths and weaknesses requires self-assessment, feedback from others, and reflection on experiences.",
      "ar": "تحديد نقاط القوة والضعف يتطلب التقييم الذاتي، والحصول على التغذية الراجعة من الآخرين، والتفكير في التجارب السابقة."
    }
  },
  {
    "id": "pc13",
    "question": {
      "en": "What is the difference between threats and opportunities in SWOT analysis?",
      "ar": "ما الفرق بين التهديدات والفرص في تحليل SWOT؟"
    },
    "options": {
      "en": [
        "Threats are internal factors, and opportunities are external",
        "Opportunities are positive external factors, while threats are negative external factors",
        "Both are internal factors",
        "Threats are always avoidable"
      ],
      "ar": [
        "التهديدات عوامل داخلية، والفرص عوامل خارجية",
        "الفرص هي عوامل خارجية إيجابية، بينما التهديدات عوامل خارجية سلبية",
        "كلاهما عوامل داخلية",
        "التهديدات يمكن تجنبها دائمًا"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "Opportunities are external factors that can be leveraged for growth, while threats are external challenges that may hinder progress.",
      "ar": "الفرص هي عوامل خارجية يمكن استغلالها للنمو، بينما التهديدات هي تحديات خارجية قد تعيق التقدم."
    }
  },
  {
    "id": "pc14",
    "question": {
      "en": "How can SWOT analysis be used to develop your career plans?",
      "ar": "كيف يمكن استخدام تحليل SWOT لتطوير خططك المهنية؟"
    },
    "options": {
      "en": [
        "By ignoring weaknesses",
        "By aligning strengths with opportunities and addressing threats",
        "By focusing only on threats",
        "By avoiding all risks"
      ],
      "ar": [
        "بتجاهل نقاط الضعف",
        "بمحاذاة نقاط القوة مع الفرص ومعالجة التهديدات",
        "بالتركيز فقط على التهديدات",
        "بتجنب جميع المخاطر"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "SWOT analysis helps in aligning strengths with opportunities while planning strategies to overcome threats and weaknesses.",
      "ar": "يساعد تحليل SWOT في محاذاة نقاط القوة مع الفرص أثناء التخطيط لاستراتيجيات للتغلب على التهديدات ونقاط الضعف."
    }
  },
  {
    "id": "pc15",
    "question": {
      "en": "What are SMART Goals?",
      "ar": "ما هي الأهداف الذكية (SMART Goals)؟"
    },
    "options": {
      "en": [
        "Goals that are unrealistic and vague",
        "Goals that are Specific, Measurable, Achievable, Relevant, and Time-bound",
        "Goals that do not require deadlines",
        "Goals that focus only on short-term success"
      ],
      "ar": [
        "أهداف غير واقعية وغامضة",
        "أهداف محددة وقابلة للقياس وقابلة للتحقيق وذات صلة ومحددة بوقت",
        "أهداف لا تحتاج إلى مواعيد نهائية",
        "أهداف تركز فقط على النجاح قصير المدى"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "SMART goals ensure clarity and focus by making goals specific, measurable, achievable, relevant, and time-bound.",
      "ar": "تضمن الأهداف الذكية الوضوح والتركيز من خلال جعل الأهداف محددة وقابلة للقياس وقابلة للتحقيق وذات صلة ومحددة بوقت."
    }
  },
  {
    "id": "pc16",
    "question": {
      "en": "Why is setting goals an essential step in professional success?",
      "ar": "لماذا يعتبر تحديد الأهداف خطوة أساسية في النجاح المهني؟"
    },
    "options": {
      "en": [
        "It provides direction and motivation",
        "It is not necessary for success",
        "It makes work harder",
        "It prevents creativity"
      ],
      "ar": [
        "يوفر التوجيه والتحفيز",
        "ليس ضروريًا للنجاح",
        "يجعل العمل أكثر صعوبة",
        "يحد من الإبداع"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Setting goals provides clarity, motivation, and a roadmap to success.",
      "ar": "تحديد الأهداف يوفر الوضوح والتحفيز وخريطة طريق لتحقيق النجاح."
    }
  },
  {
    "id": "pc17",
    "question": {
      "en": "How can SMART goals be achieved?",
      "ar": "كيف يمكن تحقيق الأهداف المحددة وفقًا لإطار SMART؟"
    },
    "options": {
      "en": [
        "By setting vague objectives",
        "By following a structured plan with measurable progress",
        "By avoiding deadlines",
        "By changing goals frequently"
      ],
      "ar": [
        "بتحديد أهداف غامضة",
        "باتباع خطة منظمة مع تقدم قابل للقياس",
        "بتجنب المواعيد النهائية",
        "بتغيير الأهداف باستمرار"
      ]
    },
    "correctAnswer": 1,
    "explanation": {
      "en": "SMART goals require a structured approach with clear milestones and measurable progress.",
      "ar": "تتطلب الأهداف الذكية نهجًا منظمًا مع مراحل واضحة وتقدم قابل للقياس."
    }
  },
  {
    "id": "pc18",
    "question": {
      "en": "What is the role of personal vision in achieving goals?",
      "ar": "ما دور الرؤية الشخصية في تحقيق الأهداف؟"
    },
    "options": {
      "en": [
        "It provides motivation and direction",
        "It has no impact on success",
        "It makes planning unnecessary",
        "It replaces goal setting"
      ],
      "ar": [
        "توفر التحفيز والتوجيه",
        "ليس لها تأثير على النجاح",
        "تجعل التخطيط غير ضروري",
        "تحل محل تحديد الأهداف"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "A clear personal vision helps guide goal setting and motivates individuals to achieve success.",
      "ar": "الرؤية الشخصية الواضحة تساعد في توجيه تحديد الأهداف وتحفز الأفراد على تحقيق النجاح."
    }
  },
  {
    "id": "pc19",
    "question": {
      "en": "How does having clear goals help in making professional decisions?",
      "ar": "كيف يساعدك وضوح أهدافك في اتخاذ قرارات مهنية صحيحة؟"
    },
    "options": {
      "en": [
        "It provides clarity and focus",
        "It makes decisions harder",
        "It limits opportunities",
        "It removes flexibility"
      ],
      "ar": [
        "يوفر الوضوح والتركيز",
        "يجعل القرارات أكثر صعوبة",
        "يحد من الفرص",
        "يزيل المرونة"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Clear goals help in making informed decisions by providing focus and direction.",
      "ar": "تساعد الأهداف الواضحة في اتخاذ قرارات مستنيرة من خلال توفير التركيز والتوجيه."
    }
  },
  {
    "id": "pc20",
    "question": {
      "en": "What are the key elements of building a strong personal brand?",
      "ar": "ما هي العناصر الأساسية لإنشاء علامة شخصية قوية؟"
    },
    "options": {
      "en": [
        "Consistency, authenticity, and clear messaging",
        "Copying others' styles",
        "Focusing only on social media",
        "Avoiding networking"
      ],
      "ar": [
        "التناسق، الأصالة، ورسالة واضحة",
        "تقليد أساليب الآخرين",
        "التركيز فقط على وسائل التواصل الاجتماعي",
        "تجنب بناء العلاقات"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "A strong personal brand is built on authenticity, consistency, and delivering a clear message about one's values and expertise.",
      "ar": "يتم بناء العلامة الشخصية القوية على الأصالة، التناسق، وتقديم رسالة واضحة حول القيم والخبرات."
    }
  },
  {
    "id": "pc21",
    "question": {
      "en": "How can personal values and principles impact a personal brand?",
      "ar": "كيف يمكن أن تؤثر القيم والمبادئ الشخصية على العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "They shape how others perceive and trust you",
        "They are irrelevant to personal branding",
        "They should be kept private",
        "They weaken the brand’s credibility"
      ],
      "ar": [
        "تؤثر على كيفية إدراك الآخرين لك وزيادة ثقتهم بك",
        "ليست ذات صلة بالعلامة الشخصية",
        "يجب إبقاؤها سرية",
        "تقلل من مصداقية العلامة الشخصية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Personal values define credibility and trust, making the brand more authentic and relatable.",
      "ar": "القيم الشخصية تحدد المصداقية والثقة، مما يجعل العلامة الشخصية أكثر أصالة وقربًا من الجمهور."
    }
  },
  {
    "id": "pc22",
    "question": {
      "en": "What is the relationship between personal marketing and personal branding?",
      "ar": "ما هي العلاقة بين التسويق الشخصي وبناء العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "Personal marketing helps promote the personal brand",
        "They are completely unrelated",
        "Personal branding is only for celebrities",
        "Marketing is more important than branding"
      ],
      "ar": [
        "التسويق الشخصي يساعد في الترويج للعلامة الشخصية",
        "لا علاقة بينهما",
        "العلامة الشخصية تقتصر على المشاهير",
        "التسويق أهم من العلامة الشخصية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Personal marketing is a strategy used to promote and establish a strong personal brand.",
      "ar": "التسويق الشخصي هو استراتيجية تُستخدم للترويج وبناء علامة شخصية قوية."
    }
  },
  {
    "id": "pc23",
    "question": {
      "en": "How can social media help strengthen a personal brand?",
      "ar": "كيف يمكن لوسائل التواصل الاجتماعي أن تساعد في تقوية العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "By sharing valuable content and engaging with the audience",
        "By posting randomly without strategy",
        "By avoiding interaction with followers",
        "By using only paid advertisements"
      ],
      "ar": [
        "من خلال مشاركة محتوى قيّم والتفاعل مع الجمهور",
        "من خلال النشر العشوائي بدون استراتيجية",
        "بتجنب التفاعل مع المتابعين",
        "بالاعتماد فقط على الإعلانات المدفوعة"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Social media provides a platform to share valuable insights, engage with the audience, and build credibility.",
      "ar": "توفر وسائل التواصل الاجتماعي منصة لمشاركة الأفكار القيمة، والتفاعل مع الجمهور، وبناء المصداقية."
    }
  },
  {
    "id": "pc24",
    "question": {
      "en": "What mistakes should be avoided when building a personal brand?",
      "ar": "ما هي الأخطاء التي يجب تجنبها عند بناء العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "Being inconsistent, lacking authenticity, and ignoring engagement",
        "Posting frequently without strategy",
        "Following every trend blindly",
        "Focusing only on self-promotion"
      ],
      "ar": [
        "عدم التناسق، نقص الأصالة، وتجاهل التفاعل",
        "النشر المتكرر بدون استراتيجية",
        "اتباع كل الاتجاهات بدون تفكير",
        "التركيز فقط على الترويج الذاتي"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "A strong personal brand requires authenticity, consistency, and meaningful engagement with the audience.",
      "ar": "يتطلب بناء علامة شخصية قوية الأصالة، التناسق، والتفاعل الهادف مع الجمهور."
    }
  },
  {
    "id": "pc25",
    "question": {
      "en": "How can audience engagement enhance personal branding?",
      "ar": "كيف يمكن للتفاعل مع الجمهور أن يعزز من قوة العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "By building trust and credibility",
        "By ignoring followers",
        "By only posting advertisements",
        "By avoiding discussions"
      ],
      "ar": [
        "من خلال بناء الثقة والمصداقية",
        "بتجاهل المتابعين",
        "بنشر الإعلانات فقط",
        "بتجنب النقاشات"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Interacting with the audience fosters trust and strengthens relationships, making the brand more influential.",
      "ar": "التفاعل مع الجمهور يعزز الثقة ويقوي العلاقات، مما يجعل العلامة الشخصية أكثر تأثيرًا."
    }
  },
  {
    "id": "pc26",
    "question": {
      "en": "Why is providing high-quality content important in personal branding?",
      "ar": "ما أهمية تقديم محتوى عالي الجودة في بناء العلامة الشخصية؟"
    },
    "options": {
      "en": [
        "It establishes credibility and attracts a loyal audience",
        "It has no impact on personal branding",
        "It makes branding unnecessary",
        "It only works for large businesses"
      ],
      "ar": [
        "يبني المصداقية ويجذب جمهورًا وفيًا",
        "ليس له تأثير على العلامة الشخصية",
        "يجعل العلامة الشخصية غير ضرورية",
        "يعمل فقط مع الشركات الكبيرة"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "High-quality content helps establish authority, attract engagement, and build a strong brand image.",
      "ar": "يساعد المحتوى عالي الجودة في بناء المصداقية، جذب التفاعل، وتشكيل صورة قوية للعلامة الشخصية."
    }
  },
  {
    "id": "pc27",
    "question": {
      "en": "How can you maintain consistency in your personal identity across different platforms?",
      "ar": "كيف يمكن الحفاظ على تناسق الهوية الشخصية عبر مختلف المنصات؟"
    },
    "options": {
      "en": [
        "By using a unified tone, style, and message",
        "By changing messaging frequently",
        "By using different identities on each platform",
        "By focusing only on one platform"
      ],
      "ar": [
        "باستخدام نبرة وأسلوب ورسالة موحدة",
        "بتغيير الرسائل بشكل متكرر",
        "باستخدام هويات مختلفة على كل منصة",
        "بالتركيز على منصة واحدة فقط"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Consistency in tone, visuals, and messaging across platforms strengthens brand recognition.",
      "ar": "التناسق في النبرة، الصور، والرسائل عبر المنصات يعزز التعرف على العلامة الشخصية."
    }
  },
  {
    "id": "pc28",
    "question": {
      "en": "What are effective strategies for enhancing a personal brand in a professional field?",
      "ar": "ما هي الاستراتيجيات الفعالة لتعزيز العلامة الشخصية في المجال المهني؟"
    },
    "options": {
      "en": [
        "Networking, content creation, and thought leadership",
        "Avoiding professional communities",
        "Focusing only on self-promotion",
        "Ignoring industry trends"
      ],
      "ar": [
        "بناء العلاقات، إنشاء المحتوى، والريادة الفكرية",
        "تجنب المجتمعات المهنية",
        "التركيز فقط على الترويج الذاتي",
        "تجاهل اتجاهات الصناعة"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Engaging with industry professionals and sharing valuable insights can establish authority and credibility.",
      "ar": "التفاعل مع المحترفين في المجال ومشاركة الأفكار القيمة يعزز المصداقية والريادة."
    }
  },
  {
    "id": "pc29",
    "question": {
      "en": "What is the difference between verbal and non-verbal communication?",
      "ar": "ما الفرق بين التواصل اللفظي وغير اللفظي؟"
    },
    "options": {
      "en": [
        "Verbal communication uses words, while non-verbal communication includes body language and facial expressions",
        "There is no difference",
        "Non-verbal communication is more important than verbal communication",
        "Verbal communication is only used in formal settings"
      ],
      "ar": [
        "التواصل اللفظي يعتمد على الكلمات، بينما يشمل التواصل غير اللفظي لغة الجسد وتعبيرات الوجه",
        "لا يوجد فرق",
        "التواصل غير اللفظي أكثر أهمية من التواصل اللفظي",
        "التواصل اللفظي يستخدم فقط في البيئات الرسمية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Verbal communication involves spoken or written words, while non-verbal communication includes gestures, posture, and facial expressions.",
      "ar": "التواصل اللفظي يشمل الكلمات المنطوقة أو المكتوبة، بينما يشمل التواصل غير اللفظي الإيماءات، وضعية الجسد، وتعبيرات الوجه."
    }
  },
  {
    "id": "pc30",
    "question": {
      "en": "How can body language influence first impressions?",
      "ar": "كيف يمكن للغة الجسد أن تؤثر على الانطباع الأول؟"
    },
    "options": {
      "en": [
        "It conveys confidence, openness, and trustworthiness",
        "It has no impact on first impressions",
        "It is only important in public speaking",
        "It is more effective than verbal communication"
      ],
      "ar": [
        "تعكس الثقة والانفتاح والمصداقية",
        "ليس لها تأثير على الانطباع الأول",
        "تكون مهمة فقط عند التحدث أمام الجمهور",
        "أكثر تأثيرًا من التواصل اللفظي"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Body language plays a key role in how others perceive confidence and trustworthiness during first encounters.",
      "ar": "تلعب لغة الجسد دورًا مهمًا في كيفية إدراك الآخرين للثقة والمصداقية خلال اللقاءات الأولى."
    }
  },
  {
    "id": "pc31",
    "question": {
      "en": "What are the skills of active listening?",
      "ar": "ما هي مهارات الاستماع الفعّال؟"
    },
    "options": {
      "en": [
        "Maintaining eye contact, summarizing, and asking clarifying questions",
        "Interrupting frequently",
        "Only listening without responding",
        "Ignoring body language"
      ],
      "ar": [
        "الحفاظ على التواصل البصري، التلخيص، وطرح أسئلة توضيحية",
        "المقاطعة بشكل متكرر",
        "الاستماع دون الرد",
        "تجاهل لغة الجسد"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Active listening involves focusing on the speaker, responding appropriately, and ensuring understanding.",
      "ar": "يتضمن الاستماع الفعّال التركيز على المتحدث، الاستجابة بشكل مناسب، وضمان الفهم."
    }
  },
  {
    "id": "pc32",
    "question": {
      "en": "How does the art of persuasion improve personal communication?",
      "ar": "كيف يساعد فن الإقناع في تحسين التواصل الشخصي؟"
    },
    "options": {
      "en": [
        "It helps convey ideas effectively and influence others",
        "It makes communication more complex",
        "It only works in sales and marketing",
        "It is not important in daily communication"
      ],
      "ar": [
        "يساعد في إيصال الأفكار بفاعلية والتأثير على الآخرين",
        "يجعل التواصل أكثر تعقيدًا",
        "يقتصر على التسويق والمبيعات",
        "ليس له أهمية في التواصل اليومي"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Persuasion is a key skill in effective communication, helping individuals influence decisions and build strong relationships.",
      "ar": "يُعتبر الإقناع مهارة رئيسية في التواصل الفعّال، حيث يساعد في التأثير على القرارات وبناء علاقات قوية."
    }
  },
  {
    "id": "pc33",
    "question": {
      "en": "What are strategies to improve public speaking skills?",
      "ar": "ما هي استراتيجيات تحسين مهارات التحدث أمام الجمهور؟"
    },
    "options": {
      "en": [
        "Practicing regularly, using storytelling, and engaging with the audience",
        "Avoiding eye contact",
        "Speaking without preparation",
        "Using complex language to impress the audience"
      ],
      "ar": [
        "الممارسة المنتظمة، استخدام السرد القصصي، والتفاعل مع الجمهور",
        "تجنب التواصل البصري",
        "التحدث دون تحضير",
        "استخدام لغة معقدة لإبهار الجمهور"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Public speaking skills can be improved through consistent practice, storytelling techniques, and audience interaction.",
      "ar": "يمكن تحسين مهارات التحدث أمام الجمهور من خلال الممارسة المستمرة، تقنيات السرد القصصي، والتفاعل مع الجمهور."
    }
  },
  {
    "id": "pc34",
    "question": {
      "en": "Why is clear and direct communication important in the workplace?",
      "ar": "لماذا يعتبر التواصل الواضح والمباشر أمرًا مهمًا في بيئة العمل؟"
    },
    "options": {
      "en": [
        "It reduces misunderstandings and improves productivity",
        "It makes communication more complicated",
        "It is only necessary for leaders",
        "It is not relevant to team collaboration"
      ],
      "ar": [
        "يقلل من سوء الفهم ويحسن الإنتاجية",
        "يجعل التواصل أكثر تعقيدًا",
        "يقتصر على القادة فقط",
        "ليس له علاقة بالتعاون في الفريق"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Clear communication ensures tasks are understood correctly, leading to increased efficiency and teamwork.",
      "ar": "يضمن التواصل الواضح فهم المهام بشكل صحيح، مما يؤدي إلى زيادة الكفاءة والتعاون في العمل."
    }
  },
  {
    "id": "pc35",
    "question": {
      "en": "What role does emotional intelligence play in improving communication skills?",
      "ar": "ما دور الذكاء العاطفي في تحسين مهارات التواصل؟"
    },
    "options": {
      "en": [
        "It helps understand emotions and respond appropriately",
        "It has no effect on communication",
        "It is only useful in personal relationships",
        "It makes conversations more difficult"
      ],
      "ar": [
        "يساعد في فهم المشاعر والاستجابة بشكل مناسب",
        "ليس له تأثير على التواصل",
        "يُستخدم فقط في العلاقات الشخصية",
        "يجعل المحادثات أكثر صعوبة"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Emotional intelligence enhances communication by improving empathy, self-awareness, and interpersonal interactions.",
      "ar": "يعزز الذكاء العاطفي التواصل من خلال تحسين التعاطف، الوعي الذاتي، والتفاعلات بين الأفراد."
    }
  },
  {
    "id": "pc36",
    "question": {
      "en": "How can one overcome the fear of public speaking?",
      "ar": "كيف يمكن التغلب على رهبة التحدث أمام الجمهور؟"
    },
    "options": {
      "en": [
        "Practicing frequently, visualizing success, and using relaxation techniques",
        "Avoiding public speaking",
        "Speaking quickly to finish faster",
        "Ignoring audience reactions"
      ],
      "ar": [
        "الممارسة المتكررة، تخيل النجاح، واستخدام تقنيات الاسترخاء",
        "تجنب التحدث أمام الجمهور",
        "التحدث بسرعة لإنهاء الخطاب سريعًا",
        "تجاهل ردود فعل الجمهور"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Fear of public speaking can be reduced through preparation, practice, and relaxation techniques.",
      "ar": "يمكن تقليل رهبة التحدث أمام الجمهور من خلال التحضير، الممارسة، واستخدام تقنيات الاسترخاء."
    }
  },
  {
    "id": "pc37",
    "question": {
      "en": "Why are professional relationships important for career success?",
      "ar": "لماذا تعتبر العلاقات المهنية مهمة للنجاح الوظيفي؟"
    },
    "options": {
      "en": [
        "They provide opportunities, support, and career growth",
        "They are only important in leadership roles",
        "They have no impact on career success",
        "They are only beneficial for socializing"
      ],
      "ar": [
        "توفر الفرص، الدعم، والنمو المهني",
        "مهمة فقط في المناصب القيادية",
        "ليس لها تأثير على النجاح الوظيفي",
        "مفيدة فقط للتواصل الاجتماعي"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Building strong professional relationships can lead to career growth, mentorship, and new job opportunities.",
      "ar": "يساعد بناء علاقات مهنية قوية في تحقيق النمو الوظيفي، الحصول على الإرشاد، وفتح فرص عمل جديدة."
    }
  },
  {
    "id": "pc38",
    "question": {
      "en": "How can you build a strong professional network?",
      "ar": "كيف يمكن بناء شبكة علاقات مهنية قوية؟"
    },
    "options": {
      "en": [
        "By engaging in industry events, networking, and providing value to others",
        "By avoiding communication with others",
        "By only connecting with senior executives",
        "By asking for favors without offering anything in return"
      ],
      "ar": [
        "من خلال المشاركة في الفعاليات الصناعية، بناء العلاقات، وتقديم قيمة للآخرين",
        "بتجنب التواصل مع الآخرين",
        "بالتواصل فقط مع كبار المسؤولين",
        "بطلب الخدمات دون تقديم شيء بالمقابل"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Networking effectively involves mutual support, professional engagement, and consistent communication.",
      "ar": "يتطلب بناء شبكة علاقات مهنية فعالة تقديم الدعم المتبادل، التفاعل المهني، والحفاظ على التواصل المستمر."
    }
  },
  {
    "id": "pc39",
    "question": {
      "en": "What are the best ways to expand your professional network?",
      "ar": "ما هي أفضل الطرق لتوسيع دائرة العلاقات المهنية؟"
    },
    "options": {
      "en": [
        "Attending events, joining professional groups, and leveraging social media",
        "Avoiding industry-related events",
        "Only networking with colleagues at work",
        "Focusing only on personal connections"
      ],
      "ar": [
        "حضور الفعاليات، الانضمام إلى مجموعات مهنية، والاستفادة من وسائل التواصل الاجتماعي",
        "تجنب الفعاليات المتعلقة بالمجال",
        "بناء العلاقات فقط مع الزملاء في العمل",
        "التركيز فقط على العلاقات الشخصية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Expanding professional networks requires active engagement in industry-related activities and consistent outreach.",
      "ar": "يتطلب توسيع دائرة العلاقات المهنية التفاعل النشط في الفعاليات المهنية والتواصل المستمر."
    }
  },
  {
    "id": "pc40",
    "question": {
      "en": "How can social media help in building professional relationships?",
      "ar": "كيف يمكن الاستفادة من وسائل التواصل الاجتماعي في بناء العلاقات المهنية؟"
    },
    "options": {
      "en": [
        "By connecting with professionals, sharing insights, and engaging in discussions",
        "By ignoring professional platforms",
        "By only following industry leaders without interaction",
        "By using social media only for personal purposes"
      ],
      "ar": [
        "من خلال التواصل مع المحترفين، مشاركة الأفكار، والمشاركة في النقاشات",
        "بتجاهل المنصات المهنية",
        "بمتابعة قادة المجال فقط دون تفاعل",
        "باستخدام وسائل التواصل الاجتماعي لأغراض شخصية فقط"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Social media platforms like LinkedIn help professionals connect, share knowledge, and build valuable relationships.",
      "ar": "تساعد منصات التواصل الاجتماعي مثل لينكدإن المحترفين على التواصل، تبادل المعرفة، وبناء علاقات مهنية قيمة."
    }
  },
  {
    "id": "pc41",
    "question": {
      "en": "What mistakes should be avoided when building professional relationships?",
      "ar": "ما هي الأخطاء التي يجب تجنبها عند بناء العلاقات المهنية؟"
    },
    "options": {
      "en": [
        "Being insincere, ignoring follow-ups, and only reaching out when in need",
        "Building relationships with everyone without consideration",
        "Only connecting with people in the same company",
        "Never attending networking events"
      ],
      "ar": [
        "عدم الإخلاص، تجاهل المتابعة، والتواصل فقط عند الحاجة",
        "بناء العلاقات مع الجميع دون تفكير",
        "التواصل فقط مع الأشخاص في نفس الشركة",
        "عدم حضور الفعاليات المهنية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Professional relationships require sincerity, consistency, and a willingness to provide value to others.",
      "ar": "تتطلب العلاقات المهنية الصدق، الاستمرارية، والاستعداد لتقديم قيمة للآخرين."
    }
  },
  {
    "id": "pc42",
    "question": {
      "en": "Why is continuous communication important in maintaining professional relationships?",
      "ar": "ما أهمية التواصل المستمر في الحفاظ على العلاقات المهنية؟"
    },
    "options": {
      "en": [
        "It strengthens trust and keeps relationships active",
        "It has no effect on professional relationships",
        "It is only necessary for close colleagues",
        "It can weaken professional connections"
      ],
      "ar": [
        "يعزز الثقة ويحافظ على العلاقات نشطة",
        "ليس له تأثير على العلاقات المهنية",
        "مطلوب فقط للزملاء المقربين",
        "يمكن أن يضعف العلاقات المهنية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Regular communication ensures that professional relationships remain strong and beneficial over time.",
      "ar": "يضمن التواصل المستمر بقاء العلاقات المهنية قوية ومفيدة على المدى الطويل."
    }
  },
  {
    "id": "pc43",
    "question": {
      "en": "How can events and conferences help in expanding professional relationships?",
      "ar": "كيف يمكن استغلال المناسبات والمؤتمرات في توسيع العلاقات المهنية؟"
    },
    "options": {
      "en": [
        "By networking, sharing ideas, and meeting industry experts",
        "By avoiding interactions at events",
        "By only attending without engaging",
        "By focusing solely on presentations"
      ],
      "ar": [
        "من خلال بناء العلاقات، تبادل الأفكار، ومقابلة خبراء المجال",
        "بتجنب التفاعل في الفعاليات",
        "بحضور الفعاليات فقط دون تفاعل",
        "بالتركيز فقط على العروض التقديمية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Attending events allows professionals to network, gain insights, and create valuable connections.",
      "ar": "توفر المناسبات والمؤتمرات فرصة للتواصل مع المحترفين، اكتساب المعرفة، وبناء علاقات قيمة."
    }
  },
  {
    "id": "pc44",
    "question": {
      "en": "What role does mutual benefit play in successful professional relationships?",
      "ar": "ما دور تبادل المنفعة في نجاح العلاقات المهنية؟"
    },
    "options": {
      "en": [
        "It fosters trust, collaboration, and long-term connections",
        "It is not important in professional networking",
        "It only benefits one side",
        "It creates unnecessary obligations"
      ],
      "ar": [
        "يعزز الثقة، التعاون، والعلاقات طويلة الأمد",
        "ليس له أهمية في بناء العلاقات المهنية",
        "يفيد طرفًا واحدًا فقط",
        "يخلق التزامات غير ضرورية"
      ]
    },
    "correctAnswer": 0,
    "explanation": {
      "en": "Successful relationships are based on mutual support and shared professional growth.",
      "ar": "تقوم العلاقات المهنية الناجحة على الدعم المتبادل والنمو المهني المشترك."
    }
  }
];