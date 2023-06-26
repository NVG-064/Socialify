-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: socialifydb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `community`
--

DROP TABLE IF EXISTS `community`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `community` (
  `comId` int NOT NULL,
  `comName` varchar(255) NOT NULL,
  `comDesc` varchar(255) NOT NULL,
  `comRules` int NOT NULL,
  `comDateCreated` date NOT NULL,
  `comLocation` varchar(255) NOT NULL,
  `comOwner` int NOT NULL,
  `comMember` int NOT NULL,
  `comModerator` int NOT NULL,
  `comRating` float NOT NULL,
  `comType` varchar(255) NOT NULL,
  `comPost` int NOT NULL,
  `comRates` int NOT NULL,
  PRIMARY KEY (`comId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community`
--

LOCK TABLES `community` WRITE;
/*!40000 ALTER TABLE `community` DISABLE KEYS */;
/*!40000 ALTER TABLE `community` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `communityevent`
--

DROP TABLE IF EXISTS `communityevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `communityevent` (
  `ceId` int DEFAULT NULL,
  `ceName` varchar(255) DEFAULT NULL,
  `ceDesc` varchar(255) DEFAULT NULL,
  `ceSpeaker` int DEFAULT NULL,
  `ceStarted` tinyint(1) DEFAULT NULL,
  `ceDate` datetime DEFAULT NULL,
  `ceCover` blob,
  `ceimage` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `communityevent`
--

LOCK TABLES `communityevent` WRITE;
/*!40000 ALTER TABLE `communityevent` DISABLE KEYS */;
/*!40000 ALTER TABLE `communityevent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `communityeventspeaker`
--

DROP TABLE IF EXISTS `communityeventspeaker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `communityeventspeaker` (
  `cesId` int DEFAULT NULL,
  `cesUserId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `communityeventspeaker`
--

LOCK TABLES `communityeventspeaker` WRITE;
/*!40000 ALTER TABLE `communityeventspeaker` DISABLE KEYS */;
/*!40000 ALTER TABLE `communityeventspeaker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `communitymember`
--

DROP TABLE IF EXISTS `communitymember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `communitymember` (
  `cmId` int DEFAULT NULL,
  `cmCommunityId` int DEFAULT NULL,
  `cmMember` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `communitymember`
--

LOCK TABLES `communitymember` WRITE;
/*!40000 ALTER TABLE `communitymember` DISABLE KEYS */;
/*!40000 ALTER TABLE `communitymember` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `communitymodadmin`
--

DROP TABLE IF EXISTS `communitymodadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `communitymodadmin` (
  `cmaID` int DEFAULT NULL,
  `cmaCommunityId` int DEFAULT NULL,
  `cmaMod` varchar(255) DEFAULT NULL,
  `cmaAdm` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `communitymodadmin`
--

LOCK TABLES `communitymodadmin` WRITE;
/*!40000 ALTER TABLE `communitymodadmin` DISABLE KEYS */;
/*!40000 ALTER TABLE `communitymodadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `communityrating`
--

DROP TABLE IF EXISTS `communityrating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `communityrating` (
  `craId` int DEFAULT NULL,
  `craUser` int DEFAULT NULL,
  `craRate` int DEFAULT NULL,
  `craLikedThings` int DEFAULT NULL,
  `craLikedDesc` varchar(255) DEFAULT NULL,
  `craDislikedThings` int DEFAULT NULL,
  `craDislikedDesc` varchar(255) DEFAULT NULL,
  `craSuggestion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `communityrating`
--

LOCK TABLES `communityrating` WRITE;
/*!40000 ALTER TABLE `communityrating` DISABLE KEYS */;
/*!40000 ALTER TABLE `communityrating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `communityrule`
--

DROP TABLE IF EXISTS `communityrule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `communityrule` (
  `crId` int DEFAULT NULL,
  `crCommunityId` int DEFAULT NULL,
  `crRules` varchar(255) DEFAULT NULL,
  `crNum` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `communityrule`
--

LOCK TABLES `communityrule` WRITE;
/*!40000 ALTER TABLE `communityrule` DISABLE KEYS */;
/*!40000 ALTER TABLE `communityrule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thing`
--

DROP TABLE IF EXISTS `thing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thing` (
  `tld` int DEFAULT NULL,
  `tName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thing`
--

LOCK TABLES `thing` WRITE;
/*!40000 ALTER TABLE `thing` DISABLE KEYS */;
/*!40000 ALTER TABLE `thing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` int DEFAULT NULL,
  `userFullName` varchar(255) DEFAULT NULL,
  `userEmail` varchar(255) DEFAULT NULL,
  `userPassword` varchar(255) DEFAULT NULL,
  `userImg` blob,
  `userDesc` varchar(255) DEFAULT NULL,
  `userMostLiked` varchar(255) DEFAULT NULL,
  `userBirthday` date DEFAULT NULL,
  `userBornPlace` varchar(255) DEFAULT NULL,
  `userHomePlace` varchar(255) DEFAULT NULL,
  `userRec` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'socialifydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-26  8:37:45
