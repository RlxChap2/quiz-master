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
    id: 'gk1',
    question: {
      en: 'Which planet is known as the Red Planet?',
      ar: 'ما هو الكوكب المعروف باسم الكوكب الأحمر؟'
    },
    options: {
      en: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      ar: ['الزهرة', 'المريخ', 'المشتري', 'زحل']
    },
    correctAnswer: 1,
    explanation: {
      en: 'Mars appears red due to iron oxide (rust) on its surface',
      ar: 'يظهر المريخ باللون الأحمر بسبب أكسيد الحديد (الصدأ) على سطحه'
    }
  },
  {
    id: 'gk2',
    question: {
      en: 'Who painted the Mona Lisa?',
      ar: 'من رسم لوحة الموناليزا؟'
    },
    options: {
      en: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
      ar: ['فينسنت فان جوخ', 'بابلو بيكاسو', 'ليوناردو دا فينشي', 'مايكل أنجلو']
    },
    correctAnswer: 2,
    explanation: {
      en: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1519',
      ar: 'رسم ليوناردو دا فينشي لوحة الموناليزا بين عامي 1503 و 1519'
    }
  },
  {
    id: 'gk3',
    question: {
      en: 'Which element has the chemical symbol "Au"?',
      ar: 'ما هو العنصر الذي رمزه الكيميائي "Au"؟'
    },
    options: {
      en: ['Silver', 'Gold', 'Copper', 'Aluminum'],
      ar: ['الفضة', 'الذهب', 'النحاس', 'الألومنيوم']
    },
    correctAnswer: 1,
    explanation: {
      en: '"Au" comes from the Latin word "aurum" meaning gold',
      ar: '"Au" مشتق من الكلمة اللاتينية "aurum" التي تعني الذهب'
    }
  },
  {
    id: 'gk4',
    question: {
      en: 'What is the capital city of Japan?',
      ar: 'ما هي عاصمة اليابان؟'
    },
    options: {
      en: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
      ar: ['سيول', 'بكين', 'طوكيو', 'بانكوك']
    },
    correctAnswer: 2,
    explanation: {
      en: 'Tokyo has been the capital of Japan since 1868',
      ar: 'طوكيو هي عاصمة اليابان منذ عام 1868'
    }
  }
];