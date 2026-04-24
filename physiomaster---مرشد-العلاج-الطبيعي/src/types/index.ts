export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface DayPlan {
  id: string;
  name: string;
  tasks: string[];
}

export interface WeekPlan {
  id: string;
  title: string;
  days: DayPlan[];
}

export interface MonthPlan {
  id: string;
  name: string;
  weeks: WeekPlan[];
}

export interface Phase {
  id: string;
  title: string;
  sub: string;
  icon: React.ReactNode;
  color: string;
}

export interface SpecialTest {
  name: string;
  purpose: string;
  procedure: string;
  positive: string;
}

export interface SpecialTestCategory {
  category: string;
  tests: SpecialTest[];
}

export interface OrthoLibraryCategory {
  category: string;
  items: { name: string; detail: string }[];
}

export interface TelegramResource {
  name: string;
  url: string;
  icon: string;
  description: string;
}

export interface TelegramCategory {
  title: string;
  icon: string;
  links: { name: string; url: string }[];
}

export interface ROMReference {
  joint: string;
  flexion: string;
  extension: string;
  abduction: string;
  intRot: string;
  extRot: string;
}
