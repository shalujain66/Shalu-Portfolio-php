<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd0632960bf2f6a4c93c48fda067d6238
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd0632960bf2f6a4c93c48fda067d6238::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd0632960bf2f6a4c93c48fda067d6238::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd0632960bf2f6a4c93c48fda067d6238::$classMap;

        }, null, ClassLoader::class);
    }
}
