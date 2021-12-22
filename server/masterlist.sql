-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2021 at 12:22 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `masterlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `deletedtasks`
--

CREATE TABLE `deletedtasks` (
  `task` text NOT NULL,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `deletedtasks`
--

INSERT INTO `deletedtasks` (`task`, `month`, `day`, `year`) VALUES
('test task', 1, 1, 1000);

-- --------------------------------------------------------

--
-- Table structure for table `tasktable`
--

CREATE TABLE `tasktable` (
  `task` text NOT NULL,
  `month` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasktable`
--

INSERT INTO `tasktable` (`task`, `month`, `day`, `year`) VALUES
('Kiss da Cheese', 1, 1, 2000),
('yeth', 1, 1, 2000),
('eat', 1, 1, 2000),
('yess', 1, 8, 2021),
('Play League', 1, 1, 2022),
('indeed', 1, 1, 2022),
('long ago', 1, 1, 1200),
('test task', 1, 1, 1000),
('adas', 1, 1, 1000),
('jumping jacks', 12, 28, 2021),
('yessss', 12, 28, 2021),
('what da hell', 1, 1, 2000),
('Play League', 1, 1, 2000),
('1985', 1, 1, 2000),
('test task', 1, 1, 2000),
('$100', 1, 8, 2021),
('what da hell', 1, 1, 2000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
