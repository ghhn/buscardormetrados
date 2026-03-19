-- Inicialización de usuarios para Buscador Metrados
-- Genera contraseñas con bcrypt en Node:
-- node -e "const bcrypt=require('bcryptjs'); console.log(bcrypt.hashSync('residente123', 10));"

INSERT INTO usuarios (email, username, nombre, tipo, password_hash, especialidad_id) VALUES
('estructuras@metrados.local', 'especialidad_estructuras', 'Especialidad Estructuras', 'especialidad', '$2a$10$w1YCMF4V0F6M9yyMCSgqkOt7QtR3TjWvJp24lmhF58vPMfum8TfxC', 1),
('arquitectura@metrados.local', 'especialidad_arquitectura', 'Especialidad Arquitectura', 'especialidad', '$2a$10$wu7ABjjvql2jX5BKbXqYqeqUeJY8Bj7HUIiNSk4g3LJtA3me3Wwxm', 2),
('sanitarias@metrados.local', 'especialidad_sanitarias', 'Especialidad Instalaciones Sanitarias', 'especialidad', '$2a$10$eDb6P4nF5J7pxh7E5xT4aeZBrDv9m6k.TUcl3m2XEfr6wD4Z.0ncW', 3),
('electricas@metrados.local', 'especialidad_electricas', 'Especialidad Eléctricas', 'especialidad', '$2a$10$XoMunNuh2igw0SN7DtC8Ru3YTBhI4YINOiD43KUsLq7GwI4qQ/3BK', 4),
('electromecanicas@metrados.local', 'especialidad_electromecanicas', 'Especialidad Mecánicas', 'especialidad', '$2a$10$6aBNK5LPbYxkp2A6c0mYfOeKND9x5ecuS46GH2/Pu6B484GFq0wqO', 5),
('arqueologia@metrados.local', 'especialidad_arqueologia', 'Especialidad Arqueología', 'especialidad', '$2a$10$YccU3EZA/lcd0Tgne/yDg.zB.vipW58gl7YxWHH7c.1IBRKBR7U.2', 6),
('seguridad@metrados.local', 'especialidad_seguridad', 'Especialidad Seguridad', 'especialidad', '$2a$10$6wJ0Nv1oU5UHOX4U4okF7eq6YVbG9Z6D5jO0x6J2GsSFSgB3n6vyu', 7),
('provisionales@metrados.local', 'especialidad_obras_provisionales', 'Especialidad Obras Provisionales', 'especialidad', '$2a$10$WZyG5p9DpQ7PQ0yZc7oJBeJENpEw6fY8nQ4hr/bg9Qh5W5I4npHkO', 8),
('jefe1@metrados.local', 'jefe_area_1', 'Jefe de Área 1', 'jefe_area', '$2a$10$5YhBSI2x8hWQz0Yk7n6yaO7/u6s1d5F7kR6YoF8QNW8fB/q7n9Kx6', NULL),
('jefe2@metrados.local', 'jefe_area_2', 'Jefe de Área 2', 'jefe_area', '$2a$10$EazcKJN7Y9M0uLQh9n4IuO3Da8h4yQ7xFzP6WqC9bT7qJ1s9n8WfA', NULL),
('residente@metrados.local', 'residente', 'Residente', 'residente', '$2a$10$2ZcK8eO3jH9fP7uxK0mRpuZs1eGp8q6F9U0nK3pLn8W9aQ6YakT5y', NULL);

-- NOTA: Las contraseñas en texto son:
-- estructuras123, arqui123, sanitaria123, electrica123, electromecanica123, arqueo123, seguridad123, obras123, jefe1, jefe2, residente
