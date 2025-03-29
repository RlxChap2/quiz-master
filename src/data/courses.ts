import type { Course } from "../types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Full Guide to C# Programming",
    description:
      "Master the fundamentals of C# programming and build powerful applications.",
    instructor: "Passionate Coders",
    thumbnail: "https://i.ytimg.com/vi/DZHohhJDjHk/maxresdefault.jpg",
    videoType: "youtube",
    videoUrl:
      "https://www.youtube.com/embed/videoseries?list=PLsV97AQt78NT0H8J71qe7edwRpAirfqOI",
    duration: "16h 45m",
    category: "Programming",
  },
  {
    id: "2",
    title: "Fundamentals Of Programming With C++",
    description:
      "Learn the fundamentals of programming with C++ and build interactive applications.",
    instructor: "Elzero Web School",
    thumbnail: "https://i.ytimg.com/vi/XDuWyYxksXU/maxresdefault.jpg",
    videoType: "youtube",
    videoUrl:
      "https://www.youtube.com/embed/videoseries?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&si=7Auae8t3VN3duW57",
    duration: "11h 30m",
    category: "Programming",
  },
  {
    id: "3",
    title: "Partial fractions .. (الكسور الجزئية)",
    description: "Learn how to solve equations with partial fractions.",
    instructor: "Eng. Ahmed Essam",
    thumbnail: "https://i.ytimg.com/vi/MwL5bSFIxXs/maxresdefault.jpg",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/MwL5bSFIxXs",
    duration: "0h 57m",
    category: "Mathematics",
  },
];
