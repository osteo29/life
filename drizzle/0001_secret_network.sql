CREATE TABLE `brainDumps` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`date` varchar(10) NOT NULL,
	`content` text NOT NULL,
	`aiAnalysis` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `brainDumps_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `chatMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`role` enum('user','assistant') NOT NULL,
	`content` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chatMessages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `habitTracking` (
	`id` int AUTO_INCREMENT NOT NULL,
	`habitId` int NOT NULL,
	`userId` int NOT NULL,
	`date` varchar(10) NOT NULL,
	`completed` int NOT NULL DEFAULT 0,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `habitTracking_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `habits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`category` varchar(100),
	`frequency` enum('daily','weekly','custom') NOT NULL,
	`targetDays` varchar(50),
	`reminderTime` varchar(5),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `habits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `lectures` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`subject` varchar(255) NOT NULL,
	`type` enum('lecture','session','lab') NOT NULL,
	`date` timestamp NOT NULL,
	`duration` int,
	`location` varchar(255),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `lectures_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sleepRecords` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`date` varchar(10) NOT NULL,
	`sleepTime` timestamp,
	`wakeTime` timestamp,
	`duration` int,
	`quality` enum('poor','fair','good','excellent'),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sleepRecords_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `studySchedules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`lectureId` int,
	`subject` varchar(255) NOT NULL,
	`scheduledDate` timestamp NOT NULL,
	`type` enum('review','practice','summary') NOT NULL,
	`duration` int,
	`priority` enum('low','medium','high') DEFAULT 'medium',
	`status` enum('pending','in_progress','completed') DEFAULT 'pending',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `studySchedules_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `weeklySummaries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`weekStart` varchar(10) NOT NULL,
	`weekEnd` varchar(10) NOT NULL,
	`summary` text NOT NULL,
	`lectureCount` int DEFAULT 0,
	`habitsCompleted` int DEFAULT 0,
	`averageSleep` int,
	`studyHours` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `weeklySummaries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `brainDumps` ADD CONSTRAINT `brainDumps_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `chatMessages` ADD CONSTRAINT `chatMessages_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `habitTracking` ADD CONSTRAINT `habitTracking_habitId_habits_id_fk` FOREIGN KEY (`habitId`) REFERENCES `habits`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `habitTracking` ADD CONSTRAINT `habitTracking_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `habits` ADD CONSTRAINT `habits_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `lectures` ADD CONSTRAINT `lectures_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `sleepRecords` ADD CONSTRAINT `sleepRecords_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `studySchedules` ADD CONSTRAINT `studySchedules_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `studySchedules` ADD CONSTRAINT `studySchedules_lectureId_lectures_id_fk` FOREIGN KEY (`lectureId`) REFERENCES `lectures`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `weeklySummaries` ADD CONSTRAINT `weeklySummaries_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;