CREATE TABLE IF NOT EXISTS `Authors` (
  `id` INTEGER NOT NULL auto_increment , 
  `firstName` VARCHAR(255), 
  `lastName` VARCHAR(255), 
  `createdAt` DATETIME NOT NULL, 
  `updatedAt` DATETIME NOT NULL, 
  PRIMARY KEY (`id`)
)

CREATE TABLE IF NOT EXISTS `Books` (
    `id` INTEGER NOT NULL auto_increment , 
    `title` VARCHAR(255), 
    `coverPhoto` VARCHAR(255), 
    `createdAt` DATETIME NOT NULL, 
    `updatedAt` DATETIME NOT NULL, 
    `AuthorId` INTEGER, 
    PRIMARY KEY (`id`), 
    FOREIGN KEY (`AuthorId`) REFERENCES `Authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );


  CREATE TABLE IF NOT EXISTS `Notes` (
    `id` INTEGER NOT NULL auto_increment , 
    `note` VARCHAR(255), 
    `createdAt` DATETIME NOT NULL, 
    `updatedAt` DATETIME NOT NULL, 
    `BookId` INTEGER, 
    PRIMARY KEY (`id`), 
    FOREIGN KEY (`BookId`) REFERENCES `Books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  )