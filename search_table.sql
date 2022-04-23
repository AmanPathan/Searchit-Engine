-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2022 at 07:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `search_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `search_table`
--

CREATE TABLE `search_table` (
  `book_name` text NOT NULL,
  `author` text NOT NULL,
  `shelf` int(11) NOT NULL,
  `shelf no` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `search_table`
--

INSERT INTO `search_table` (`book_name`, `author`, `shelf`, `shelf no`) VALUES
('Higher engineering mathematics by bv ramana', 'This Comprehensive text on Higher Engineering Mathematics covers the syllabus of all the mathematics papers offered to the undergraduate students', 12, 12),
('Concepts of Physics', 'H C Verma s Concepts Of Physics is an all-inclusive book, which serves to detail out the ABC of physics in an intricate manner making it an ideal book for ...', 11, 11),
('A Brief History Of Time', 'authored by the legendary theoretical physicist Stephen Hawking, is considered to be the holy grail of populalizing scientific writing and ever since it was published for the first time in 1988...', 12, 11),
('a textbook of engineering physics', 'A Textbook of Engineering Physics is written with two distinct objectives to provided a single source of information for engineering undergraduates of different specializations and provided them a solid ...', 11, 12),
('Solutions to Irodov\'s Problems in General Physics', 'It is the only one of its kind, because no other book offers solutions to all of Irodov s problems (1052)· The nearest competitor, by DB Singh, has missed many problems. ... ', 12, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `search_table`
--
ALTER TABLE `search_table` ADD FULLTEXT KEY `book_name` (`book_name`);
ALTER TABLE `search_table` ADD FULLTEXT KEY `author` (`author`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
