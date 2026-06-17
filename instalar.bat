@echo off
setlocal EnableExtensions
chcp 65001 > nul
title FlagForge Studio - Instalador PUBG Observer
echo =======================================
echo  FlagForge Studio - Instalando Banderas
echo =======================================
echo.
echo No se requieren librerias ni paquetes adicionales para este pack.
echo.
set "SCRIPT_DIR=%~dp0"
set "SRC=%SCRIPT_DIR%Observer"
set "SRC_ICON=%SRC%\TeamIcon"
set "SAVED=%LOCALAPPDATA%\TslGame\Saved"
set "DST=%SAVED%\Observer"
set "DST_ICON=%DST%\TeamIcon"
set "ERR=0"
echo [1/5] Verificando estructura del paquete...
if not exist "%SRC%\" call :fail "No se encontro la carpeta Observer junto a instalar.bat."
if not exist "%SRC_ICON%\" call :fail "No se encontro Observer\TeamIcon en el paquete."
if "%ERR%"=="1" goto :end
echo [2/5] Preparando carpetas de destino...
if not exist "%LOCALAPPDATA%\TslGame" mkdir "%LOCALAPPDATA%\TslGame" 2>nul
if not exist "%SAVED%" mkdir "%SAVED%" 2>nul
if not exist "%DST%" mkdir "%DST%" 2>nul
if not exist "%DST_ICON%" mkdir "%DST_ICON%" 2>nul
if not exist "%DST_ICON%\" call :fail "No se pudo crear la carpeta destino. Ejecuta como administrador si Windows bloquea permisos."
if "%ERR%"=="1" goto :end
echo [3/5] Copiando archivos...
where robocopy >nul 2>nul
if errorlevel 1 goto :use_xcopy
robocopy "%SRC%" "%DST%" /E /R:2 /W:1 /NFL /NDL /NJH /NJS /NP >nul
if errorlevel 8 goto :copy_error
goto :copy_done
:use_xcopy
xcopy /E /I /Y "%SRC%" "%DST%\" >nul
if errorlevel 1 goto :copy_error
goto :copy_done
:copy_error
call :fail "Error al copiar los archivos. Intentalo ejecutando como administrador."
:copy_done
if "%ERR%"=="1" goto :end
echo [4/5] Verificando instalacion...
if not exist "%DST_ICON%\" call :fail "No se creo TeamIcon en el destino."
dir /b "%DST_ICON%\*.png" >nul 2>nul
if errorlevel 1 call :fail "No se encontraron archivos PNG en TeamIcon."
if exist "%SRC%\TeamInfo.csv" if not exist "%DST%\TeamInfo.csv" call :fail "No se copio TeamInfo.csv al destino."
if "%ERR%"=="1" goto :end
echo [5/5] Instalacion completada correctamente.
echo.
echo Destino: %DST%
echo.
goto :end

:fail
echo.
echo ERROR: %~1
set "ERR=1"
exit /b 0

:end
echo.
if "%ERR%"=="1" (
  echo La instalacion no se completo. Revisa los mensajes de error.
) else (
  echo Instalacion exitosa. Ya podes abrir PUBG en modo Observer.
)
pause
exit /b %ERR%
