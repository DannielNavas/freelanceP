-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-10-2018 a las 21:47:24
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 5.6.38

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
-- Estructura de tabla para la tabla `conocimientos`
--

CREATE TABLE `conocimientos` (
  `idconocimientos` bigint(22) NOT NULL,
  `conocimientos` longtext COLLATE utf8_spanish_ci NOT NULL,
  `valoracion` int(11) NOT NULL,
  `users_documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contratos`
--

CREATE TABLE `contratos` (
  `idcontratos` bigint(22) NOT NULL,
  `tokenCliente` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `users_documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experienciaContractus`
--

CREATE TABLE `experienciaContractus` (
  `idexperienciaContractus` bigint(22) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `cliente` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `tipoProyecto_idtipoProyecto` bigint(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experienciaPersonal`
--

CREATE TABLE `experienciaPersonal` (
  `idexperienciaPersonal` bigint(22) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `lugarExperiencia` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `funciones` longtext COLLATE utf8_spanish_ci NOT NULL,
  `users_documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participantesProyecto`
--

CREATE TABLE `participantesProyecto` (
  `idparticipantesProyecto` bigint(22) NOT NULL,
  `proyecto_idproyecto` bigint(22) NOT NULL,
  `users_documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `idperfil` bigint(22) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `portafolio` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `tokenCliente` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `tipoPerfil_idtipoPerfil` bigint(22) NOT NULL,
  `users_documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `idproyecto` bigint(22) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `presupuesto` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `tipoProyecto_idtipoProyecto` bigint(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoPerfil`
--

CREATE TABLE `tipoPerfil` (
  `idtipoPerfil` bigint(22) NOT NULL,
  `tipoPerfil` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoProyecto`
--

CREATE TABLE `tipoProyecto` (
  `idtipoProyecto` bigint(22) NOT NULL,
  `tipoProyecto` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `user` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `pasword` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `documento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `conocimientos`
--
ALTER TABLE `conocimientos`
  ADD PRIMARY KEY (`idconocimientos`,`users_documento`),
  ADD KEY `fk_conocimientos_users1_idx` (`users_documento`);

--
-- Indices de la tabla `contratos`
--
ALTER TABLE `contratos`
  ADD PRIMARY KEY (`idcontratos`,`users_documento`),
  ADD KEY `fk_contratos_users1_idx` (`users_documento`);

--
-- Indices de la tabla `experienciaContractus`
--
ALTER TABLE `experienciaContractus`
  ADD PRIMARY KEY (`idexperienciaContractus`,`tipoProyecto_idtipoProyecto`),
  ADD KEY `fk_experienciaContractus_tipoProyecto1_idx` (`tipoProyecto_idtipoProyecto`);

--
-- Indices de la tabla `experienciaPersonal`
--
ALTER TABLE `experienciaPersonal`
  ADD PRIMARY KEY (`idexperienciaPersonal`,`users_documento`),
  ADD KEY `fk_experienciaPersonal_users1_idx` (`users_documento`);

--
-- Indices de la tabla `participantesProyecto`
--
ALTER TABLE `participantesProyecto`
  ADD PRIMARY KEY (`idparticipantesProyecto`,`proyecto_idproyecto`,`users_documento`),
  ADD KEY `fk_participantesProyecto_proyecto1_idx` (`proyecto_idproyecto`),
  ADD KEY `fk_participantesProyecto_users1_idx` (`users_documento`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`idperfil`,`tipoPerfil_idtipoPerfil`,`users_documento`),
  ADD KEY `fk_perfil_tipoPerfil1_idx` (`tipoPerfil_idtipoPerfil`),
  ADD KEY `fk_perfil_users1_idx` (`users_documento`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`idproyecto`,`tipoProyecto_idtipoProyecto`),
  ADD KEY `fk_proyecto_tipoProyecto1_idx` (`tipoProyecto_idtipoProyecto`);

--
-- Indices de la tabla `tipoPerfil`
--
ALTER TABLE `tipoPerfil`
  ADD PRIMARY KEY (`idtipoPerfil`);

--
-- Indices de la tabla `tipoProyecto`
--
ALTER TABLE `tipoProyecto`
  ADD PRIMARY KEY (`idtipoProyecto`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`documento`),
  ADD UNIQUE KEY `id` (`idusers`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `conocimientos`
--
ALTER TABLE `conocimientos`
  MODIFY `idconocimientos` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contratos`
--
ALTER TABLE `contratos`
  MODIFY `idcontratos` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `experienciaContractus`
--
ALTER TABLE `experienciaContractus`
  MODIFY `idexperienciaContractus` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `experienciaPersonal`
--
ALTER TABLE `experienciaPersonal`
  MODIFY `idexperienciaPersonal` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
  MODIFY `idperfil` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `idproyecto` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipoPerfil`
--
ALTER TABLE `tipoPerfil`
  MODIFY `idtipoPerfil` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipoProyecto`
--
ALTER TABLE `tipoProyecto`
  MODIFY `idtipoProyecto` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `conocimientos`
--
ALTER TABLE `conocimientos`
  ADD CONSTRAINT `fk_conocimientos_users1` FOREIGN KEY (`users_documento`) REFERENCES `users` (`documento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `contratos`
--
ALTER TABLE `contratos`
  ADD CONSTRAINT `fk_contratos_users1` FOREIGN KEY (`users_documento`) REFERENCES `users` (`documento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `experienciaContractus`
--
ALTER TABLE `experienciaContractus`
  ADD CONSTRAINT `fk_experienciaContractus_tipoProyecto1` FOREIGN KEY (`tipoProyecto_idtipoProyecto`) REFERENCES `tipoProyecto` (`idtipoProyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `experienciaPersonal`
--
ALTER TABLE `experienciaPersonal`
  ADD CONSTRAINT `fk_experienciaPersonal_users1` FOREIGN KEY (`users_documento`) REFERENCES `users` (`documento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `participantesProyecto`
--
ALTER TABLE `participantesProyecto`
  ADD CONSTRAINT `fk_participantesProyecto_proyecto1` FOREIGN KEY (`proyecto_idproyecto`) REFERENCES `proyecto` (`idproyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_participantesProyecto_users1` FOREIGN KEY (`users_documento`) REFERENCES `users` (`documento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD CONSTRAINT `fk_perfil_tipoPerfil1` FOREIGN KEY (`tipoPerfil_idtipoPerfil`) REFERENCES `tipoPerfil` (`idtipoPerfil`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_perfil_users1` FOREIGN KEY (`users_documento`) REFERENCES `users` (`documento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `fk_proyecto_tipoProyecto1` FOREIGN KEY (`tipoProyecto_idtipoProyecto`) REFERENCES `tipoProyecto` (`idtipoProyecto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
