-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2018 a las 02:57:53
-- Versión del servidor: 10.1.33-MariaDB
-- Versión de PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `contractus`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dates_professional`
--

CREATE TABLE `dates_professional` (
  `id` bigint(20) NOT NULL,
  `universidad` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `titulo` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `numero_diploma` int(11) NOT NULL,
  `acta_grado` int(11) NOT NULL,
  `folio` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `otros` text COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `user` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL,
  `pass` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `email`, `pass`) VALUES
(4, 'cesar', 'cesar@hotmail.com', '¬89­110®115¯120°60±58²59³67´77è');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dates_professional`
--
ALTER TABLE `dates_professional`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dates_professional`
--
ALTER TABLE `dates_professional`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
