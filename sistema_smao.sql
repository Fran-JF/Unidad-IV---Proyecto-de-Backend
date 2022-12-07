-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2022 a las 19:44:15
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema smao`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id_e` int(16) NOT NULL,
  `nombre_e` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion_e` text COLLATE utf8_spanish_ci NOT NULL,
  `serial_e` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_puesta_marcha_e` date NOT NULL,
  `fecha_puesta_marcha_mante_e` date NOT NULL,
  `fecha_ultimo_mantenimiento_e` date NOT NULL,
  `id_trabajo_mantenimiento_e` int(16) NOT NULL,
  `id_provedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id_e`, `nombre_e`, `descripcion_e`, `serial_e`, `fecha_puesta_marcha_e`, `fecha_puesta_marcha_mante_e`, `fecha_ultimo_mantenimiento_e`, `id_trabajo_mantenimiento_e`, `id_provedor`) VALUES
(29, 'Computadora DELL', 'equipo gamer funcional 100% nuevo', 'AHC76794', '2022-12-06', '2022-12-07', '2022-12-10', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perifericos`
--

CREATE TABLE `perifericos` (
  `id_per` int(11) NOT NULL,
  `nombre_per` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `modelo_per` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `marca_per` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `equipo_perteneciente_per` int(11) NOT NULL,
  `precio_per` varchar(60) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `perifericos`
--

INSERT INTO `perifericos` (`id_per`, `nombre_per`, `modelo_per`, `marca_per`, `equipo_perteneciente_per`, `precio_per`) VALUES
(1, 'Mouse', 'GAMER', 'Microsoft', 29, '5$'),
(2, 'Teclado', 'GAMIN XR', 'SAMSUMG', 29, '10$');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `id_prove` int(11) NOT NULL,
  `nombre_prove` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `rif_prove` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `ubicacion_prove` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`id_prove`, `nombre_prove`, `rif_prove`, `ubicacion_prove`) VALUES
(2, 'SONY', '40604526', 'New York. EEUU'),
(3, 'SAMSUMG', '51487526', 'Young Yang. CHINA'),
(4, 'VIEWSONIC', '420868214', 'EUROPA. ESPAÑA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnicos`
--

CREATE TABLE `tecnicos` (
  `id_tec` int(11) NOT NULL,
  `nombre_tec` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `usuario_tec` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `profesion_tec` varchar(60) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tecnicos`
--

INSERT INTO `tecnicos` (`id_tec`, `nombre_tec`, `usuario_tec`, `profesion_tec`) VALUES
(1, 'Anggelo Alexander Huz Pernia', 'Anggelo', 'Ingeniero en Computacion'),
(2, 'Maikol Guerrero', 'Maikol', 'Ingeniero en Computacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `id_t` int(16) NOT NULL,
  `fecha_planificada_t` date NOT NULL,
  `fecha_inicio_mante_t` date NOT NULL,
  `fecha_final_mante_t` date NOT NULL,
  `estatus_mante_t` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `id_equipo_t` int(16) NOT NULL,
  `id_tecnico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`id_t`, `fecha_planificada_t`, `fecha_inicio_mante_t`, `fecha_final_mante_t`, `estatus_mante_t`, `id_equipo_t`, `id_tecnico`) VALUES
(1, '2022-12-10', '2022-12-10', '2022-12-10', 'Activo', 29, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_u` int(11) NOT NULL,
  `rol_u` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `usuario_u` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `password_u` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_u`, `rol_u`, `usuario_u`, `password_u`) VALUES
(8, 'admin', 'Anggelo', '$2a$08$.nyYoT36gsSDyXy4tYhVMeo3xuI7L31BNnrY7e1bfIel1mtG9MKuy'),
(9, 'user', 'Maikol', '$2a$08$yhTrn7ngxcAejNt8EYxoY.vdMvbinfaGjrZ59xBYkOAofXfYNHsPO'),
(10, 'admin', 'Roberto', '$2a$08$Ng8gStKAomRWKKzhgBVNLOonDBK2bytLZ/xYr0w54Byhsn03v8UmG'),
(11, 'tecnico', 'Francisco', '$2a$08$QidYrZ5reL7im3EnNktmbuFP1Cjha6Bqrm3PR61fNPqXVXbcwOiPW');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id_e`),
  ADD KEY `id_provedor` (`id_provedor`);

--
-- Indices de la tabla `perifericos`
--
ALTER TABLE `perifericos`
  ADD PRIMARY KEY (`id_per`),
  ADD KEY `id_equipo_que_pertenece el periferico` (`equipo_perteneciente_per`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`id_prove`);

--
-- Indices de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  ADD PRIMARY KEY (`id_tec`),
  ADD KEY `usuario_registrado` (`usuario_tec`);

--
-- Indices de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD UNIQUE KEY `id_t` (`id_t`),
  ADD KEY `id_del_equipo_trabajado` (`id_equipo_t`),
  ADD KEY `id_del_tecnico` (`id_tecnico`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_u`),
  ADD UNIQUE KEY `usuario_u` (`usuario_u`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id_e` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `perifericos`
--
ALTER TABLE `perifericos`
  MODIFY `id_per` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `id_prove` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  MODIFY `id_tec` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD CONSTRAINT `id_provedor` FOREIGN KEY (`id_provedor`) REFERENCES `proveedores` (`id_prove`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `perifericos`
--
ALTER TABLE `perifericos`
  ADD CONSTRAINT `id_equipo_que_pertenece el periferico` FOREIGN KEY (`equipo_perteneciente_per`) REFERENCES `equipos` (`id_e`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  ADD CONSTRAINT `usuario_registrado` FOREIGN KEY (`usuario_tec`) REFERENCES `usuarios` (`usuario_u`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD CONSTRAINT `id_del_equipo_trabajdo` FOREIGN KEY (`id_equipo_t`) REFERENCES `equipos` (`id_e`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_del_tecnico` FOREIGN KEY (`id_tecnico`) REFERENCES `tecnicos` (`id_tec`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
