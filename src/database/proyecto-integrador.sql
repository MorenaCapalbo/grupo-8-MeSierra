-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2022 at 12:18 AM
-- Server version: 10.4.24-MariaDBnpm
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyecto-integrador`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre_categoria` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id`, `nombre_categoria`) VALUES
(1, 'Yerbas'),
(2, 'Termos'),
(3, 'Mates');

-- --------------------------------------------------------

--
-- Table structure for table `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL AUTOINCREMENT,
  `nombre_archivo` varchar(45) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `nombre_marca` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `marcas`
--

INSERT INTO `marcas` (`id`, `nombre_marca`) VALUES
(1, 'Playadito'),
(2, 'Union'),
(3, 'La Merced'),
(4, 'Taragui'),
(5, 'Rosamonte'),
(6, 'Amanda'),
(7, 'Cachamate'),
(8, 'Canarias'),
(9, 'Tucangua'),
(10, 'Verdeflor'),
(11, 'Lumilagro'),
(12, 'Stanley'),
(13, 'Waterdog'),
(14, 'Discovery'),
(15, 'Thermos'),
(16, 'Plastico'),
(17, 'Madera'),
(18, 'Calabaza'),
(19, 'Metal'),
(20, 'Mañanitas');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre_producto` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `precio` varchar(45) DEFAULT NULL,
  `stock` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `marca_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre_producto`, `estado`, `precio`, `stock`, `descripcion`, `categoria_id`, `marca_id`) VALUES
(1, 'Yerba Playadito', 'Activo', '500', '100', NULL, 1, 1),
(2, 'Yerba Union', 'Activo', '600', '100', NULL, 1, 2),
(3, 'Yerba La Merced', 'Activo', '700', '100', NULL, 1, 3),
(4, 'Yerba Taragui', 'Activo', '550', '100', NULL, 1, 4),
(5, 'Yerba Rosamonte', 'Activo', '650', '100', NULL, 1, 5),
(6, 'Yerba Mañanitas', 'Activo', '750', '100', NULL, 1, 20),
(7, 'Yerba Amanda', 'Activo', '400', '100', NULL, 1, 6),
(8, 'Yerba Cachamate', 'Activo', '1000', '100', NULL, 1, 7),
(9, 'Yerba Canarias', 'Activo', '450', '100', NULL, 1, 8),
(10, 'Yerba Tucangua', 'Activo', '800', '100', NULL, 1, 9),
(11, 'Yerba Verdeflor', 'Activo', '900', '100', NULL, 1, 10),
(12, 'Termo Lumilagro', 'Activo', '8000', '20', NULL, 2, 11),
(13, 'Termo Stanley', 'Activo', '30000', '20', NULL, 2, 12),
(14, 'Termo Waterdog', 'Activo', '15000', '20', NULL, 2, 13),
(15, 'Termo Discovery', 'Activo', '10000', '20', NULL, 2, 14),
(16, 'Termo Thermos', 'Activo', '25000', '20', NULL, 2, 15),
(17, 'Mate Plastico', 'Activo', '1000', '50', NULL, 3, 16),
(18, 'Mate Madera', 'Activo', '2000', '50', NULL, 3, 17),
(19, 'Mate Calabaza', 'Activo', '2500', '50', NULL, 3, 18),
(20, 'Mate Metal', 'Activo', '3000', '50', NULL, 3, 20);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `nombre_completo` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  `nombre_usuario` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_productos`
--

CREATE TABLE `usuarios_productos` (
  `id` int(11) NOT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `productos_id` int(11) DEFAULT NULL,
  `usuarios_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `metodo_paggo` varchar(45) DEFAULT NULL,
  `usuarios_productos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios_productos`
--
ALTER TABLE `usuarios_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
