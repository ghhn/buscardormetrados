-- Seed de usuarios metradores para Supabase Auth + public.usuarios
-- Ejecutar en Supabase SQL Editor.
--
-- Notas:
-- - Se usa una contraseña temporal unica para todos: Metrados2026!
-- - Si una especialidad no existe en public.especialidades, el script la crea.
-- - El correo lesr.ast.liq@gmail.com aparece repetido en la fuente; aqui se deja una sola vez.

create extension if not exists pgcrypto;
create extension if not exists unaccent;

do $$
declare
  seed_row record;
  v_auth_user_id uuid;
  v_public_user_id uuid;
  v_especialidad_id integer;
  v_especialidad_canonica text;
  v_password_hash text;
begin
  create temporary table if not exists tmp_seed_metradores (
    email text primary key,
    username text not null,
    nombre text not null,
    tipo public.usuario_tipo not null default 'especialidad',
    especialidad_nombre text not null,
    password_plain text not null
  ) on commit drop;

  truncate tmp_seed_metradores;

  insert into tmp_seed_metradores (email, username, nombre, tipo, especialidad_nombre, password_plain)
  values
    ('lgm.ast.est@gmail.com', 'lgm_ast_est', 'LUWI GILBERT MENDOZA GONZALES', 'especialidad', 'Estructuras', '123456'),
    ('henryfcp2016@gmail.com', 'henryfcp2016', 'HENRY FELIX CUSIHUAMAN PUMA', 'especialidad', 'Electricas', '123456'),
    ('jld.ast.cop@gmail.com', 'jld_ast_cop', 'JORGE LUIS DUEÑAS TITITO', 'especialidad', 'Costos informacion', '123456'),
    ('hcc.ast.cop@gmail.com', 'hcc_ast_cop', 'HENRY CASTILLO CABALLERO', 'especialidad', 'Costos informacion', '123456'),
    ('lesr.ast.liq@gmail.com', 'lesr_ast_liq', 'LUPITA SALAZAR RAMIREZ', 'especialidad', 'Liquidaciones', '123456'),
    ('rcm.ast.iss@gmail.com', 'rcm_ast_iss', 'ROSMERY CONDORI MAMANI', 'especialidad', 'Sanitarias', '123456'),
    ('smch.ast.iis@gmail.com', 'smch_ast_iis', 'SHESSIRA MILAGROS CATUNTA HUAM', 'especialidad', 'Sanitarias', '123456'),
    ('kmst.ast.cop@gmail.com', 'kmst_ast_cop', 'KATHERIN MARGOT SUMA TACO', 'especialidad', 'Obras Provisionales', '123456'),
    ('rdb.ast.ssoma@gmail.com', 'rdb_ast_ssoma', 'RUBEN DARIO BRAVO TUNQUI', 'especialidad', 'SSOMA', '123456'),
    ('kmr.ast.aque@gmail.com', 'kmr_ast_aque', 'KENNY MALDONADO RAMOS', 'especialidad', 'Arqueologia', '123456'),
    ('accm.ast.cop@gmail.com', 'accm_ast_cop', 'ALDAIR CHRISTIAN CONTRERAS MON', 'especialidad', 'Estructuras', '123456'),
    ('kmda.ast.cop@gmail.com', 'kmda_ast_cop', 'KLEYSON MANUEL DIAZ ARAUJO', 'especialidad', 'Estructuras', '123456'),
    ('twmc.ast.cpres@gmail.com', 'twmc_ast_cpres', 'T. WILDER MORA CARRILLO', 'especialidad', 'Estructuras', '123456'),
    ('acc.ast.arq@gmail.com', 'acc_ast_arq', 'ALVARO CATACORA CHAMPI', 'especialidad', 'Arquitectura', '123456'),
    ('llvs.ast.arq@gmail.com', 'llvs_ast_arq', 'LAURA LUCIA SALIZAR VALENZULA', 'especialidad', 'Arquitectura', '123456'),
    ('velitagarcia.arq@gmail.com', 'velitagarcia_arq', 'INGRID VELITA GARCIA', 'especialidad', 'Arquitectura', '123456'),
    ('raah.ast.arq@gmail.com', 'raah_ast_arq', 'RUDYAR ANTONIO APAZA HUAMAN', 'especialidad', 'Arquitectura', '123456'),
    ('bcm.ast.cpres@gmail.com', 'bcm_ast_cpres', 'BRAYAN CANDIA MEZA', 'especialidad', 'Sanitarias', '123456'),
    ('edwg.ast.prod@gmail.com', 'edwg_ast_prod', 'EDILTHON DENNY WARTHON GOMEZ', 'especialidad', 'Sanitarias', '123456'),
    ('jdcl.ast.cpres@gmail.com', 'jdcl_ast_cpres', 'JUAN DIEGO CUTIPA LOAYZA', 'especialidad', 'Electricas', '123456'),
    ('wkch.ast.cop@gmail.com', 'wkch_ast_cop', 'WENDY KATERIN CUNO HUALLPA', 'especialidad', 'Electricas', '123456'),
    ('bgpq.ast.cop@gmail.com', 'bgpq_ast_cop', 'BRANDHON GIOVANNY PILCO QUISP', 'especialidad', 'Mecanicas', '123456'),
    ('lims.ast.req@gmail.com', 'lims_ast_req', 'LIDUVINA ISABEL MAMANI SARCO', 'especialidad', 'Mecanicas', '123456'),
    ('pkco.ast.cop@gmail.com', 'pkco_ast_cop', 'PATRICK KLUIVERT CABRERA OCAMP', 'especialidad', 'Tic''s', '123456'),
    ('mesc.ast.ics@gmail.com', 'mesc_ast_ics', 'MARCO EMERSON SOLIS CANO', 'especialidad', 'Tic''s', '123456'),
    ('lsv.ast.amb@gmail.com', 'lsv_ast_amb', 'LIDIA SANCHEZ VALENZUELA', 'especialidad', 'Medio Ambiente', '123456'),
    ('dmhq.ast.amb@gmail.com', 'dmhq_ast_amb', 'DAYCELY MIRIAM HUANCA QUISPE', 'especialidad', 'Medio Ambiente', '123456');

  for seed_row in
    select *
    from tmp_seed_metradores
    order by email
  loop
    v_especialidad_canonica := case upper(unaccent(seed_row.especialidad_nombre))
      when 'ESTRUCTURAS' then 'ESTRUCTURAS'
      when 'ELECTRICAS' then 'ELÉCTRICAS'
      when 'ARQUITECTURA' then 'ARQUITECTURA'
      when 'SANITARIAS' then 'INSTALACIONES SANITARIAS'
      when 'ARQUEOLOGIA' then 'ARQUEOLOGÍA'
      when 'OBRAS PROVISIONALES' then 'OBRAS PROVICIONALES'
      when 'SSOMA' then 'SEGURIDAD'
      when 'MECANICAS' then 'ELECTROMECÁNICAS'
      when 'TIC''S' then 'COMUNICACIONES'
      when 'TICS' then 'COMUNICACIONES'
      when 'MEDIO AMBIENTE' then 'PLAN DE MANEJO AMBIENTAL'
      else initcap(seed_row.especialidad_nombre)
    end;

    insert into public.especialidades (nombre, codigo_prefijos)
    values (v_especialidad_canonica, array[]::text[])
    on conflict (nombre) do nothing;

    select e.id
    into v_especialidad_id
    from public.especialidades e
    where upper(unaccent(e.nombre)) = upper(unaccent(v_especialidad_canonica))
    limit 1;

    if v_especialidad_id is null then
      raise exception 'No se pudo resolver la especialidad % para el correo %', v_especialidad_canonica, seed_row.email;
    end if;

    select id
    into v_auth_user_id
    from auth.users
    where email = lower(seed_row.email)
    limit 1;

    select id
    into v_public_user_id
    from public.usuarios
    where email = lower(seed_row.email)
    limit 1;

    if v_auth_user_id is not null and v_public_user_id is not null and v_auth_user_id <> v_public_user_id then
      raise exception
        'Conflicto de IDs para %, auth.users.id=% y public.usuarios.id=%',
        seed_row.email, v_auth_user_id, v_public_user_id;
    end if;

    v_auth_user_id := coalesce(v_auth_user_id, v_public_user_id, gen_random_uuid());
    v_password_hash := crypt(seed_row.password_plain, gen_salt('bf', 10));

    insert into auth.users (
      id,
      instance_id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      invited_at,
      confirmation_token,
      confirmation_sent_at,
      recovery_token,
      recovery_sent_at,
      email_change_token_new,
      email_change,
      email_change_sent_at,
      last_sign_in_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      is_sso_user,
      is_anonymous
    )
    values (
      v_auth_user_id,
      '00000000-0000-0000-0000-000000000000',
      'authenticated',
      'authenticated',
      lower(seed_row.email),
      v_password_hash,
      now(),
      null,
      '',
      null,
      '',
      null,
      '',
      '',
      null,
      null,
      jsonb_build_object('provider', 'email', 'providers', array['email']),
      jsonb_build_object(
        'nombre', seed_row.nombre,
        'username', seed_row.username,
        'tipo', seed_row.tipo,
        'especialidad_id', v_especialidad_id
      ),
      now(),
      now(),
      false,
      false
    )
    on conflict (id) do update
    set
      email = excluded.email,
      encrypted_password = excluded.encrypted_password,
      email_confirmed_at = coalesce(auth.users.email_confirmed_at, excluded.email_confirmed_at),
      raw_app_meta_data = excluded.raw_app_meta_data,
      raw_user_meta_data = excluded.raw_user_meta_data,
      updated_at = now();

    insert into auth.identities (
      id,
      user_id,
      identity_data,
      provider,
      provider_id,
      last_sign_in_at,
      created_at,
      updated_at
    )
    values (
      gen_random_uuid(),
      v_auth_user_id,
      jsonb_build_object(
        'sub', v_auth_user_id::text,
        'email', lower(seed_row.email),
        'email_verified', true
      ),
      'email',
      v_auth_user_id::text,
      null,
      now(),
      now()
    )
    on conflict (provider, provider_id) do update
    set
      identity_data = excluded.identity_data,
      updated_at = now();

    insert into public.usuarios (
      id,
      email,
      username,
      nombre,
      tipo,
      password_hash,
      especialidad_id
    )
    values (
      v_auth_user_id,
      lower(seed_row.email),
      seed_row.username,
      seed_row.nombre,
      seed_row.tipo,
      v_password_hash,
      v_especialidad_id
    )
    on conflict (email) do update
    set
      username = excluded.username,
      nombre = excluded.nombre,
      tipo = excluded.tipo,
      password_hash = excluded.password_hash,
      especialidad_id = excluded.especialidad_id,
      actualizado_en = now();
  end loop;
end
$$;

select
  u.email,
  u.nombre,
  u.tipo,
  e.nombre as especialidad,
  case when au.id is not null then 'SI' else 'NO' end as existe_en_auth
from public.usuarios u
left join public.especialidades e on e.id = u.especialidad_id
left join auth.users au on au.id = u.id
where u.email in (
  'lgm.ast.est@gmail.com',
  'henryfcp2016@gmail.com',
  'jld.ast.cop@gmail.com',
  'hcc.ast.cop@gmail.com',
  'lesr.ast.liq@gmail.com',
  'rcm.ast.iss@gmail.com',
  'smch.ast.iis@gmail.com',
  'kmst.ast.cop@gmail.com',
  'rdb.ast.ssoma@gmail.com',
  'kmr.ast.aque@gmail.com',
  'accm.ast.cop@gmail.com',
  'kmda.ast.cop@gmail.com',
  'twmc.ast.cpres@gmail.com',
  'acc.ast.arq@gmail.com',
  'llvs.ast.arq@gmail.com',
  'velitagarcia.arq@gmail.com',
  'raah.ast.arq@gmail.com',
  'bcm.ast.cpres@gmail.com',
  'edwg.ast.prod@gmail.com',
  'jdcl.ast.cpres@gmail.com',
  'wkch.ast.cop@gmail.com',
  'bgpq.ast.cop@gmail.com',
  'lims.ast.req@gmail.com',
  'pkco.ast.cop@gmail.com',
  'mesc.ast.ics@gmail.com',
  'lsv.ast.amb@gmail.com',
  'dmhq.ast.amb@gmail.com'
)
order by e.nombre, u.nombre;
