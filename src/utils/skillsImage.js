import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import adobeaudition from '../assets/svg/skills/adobeaudition.svg'
import ai from '../assets/png/skills/ai.png'
import afterEffects from '../assets/svg/skills/after-effects.svg'
import algorithm from '../assets/png/skills/algorithm.png'
import angular from '../assets/svg/skills/angular.svg'
import aws from '../assets/svg/skills/aws.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import bulma from '../assets/svg/skills/bulma.svg'
import c from '../assets/svg/skills/c.svg'
import capacitorjs from '../assets/svg/skills/capacitorjs.svg'
import chatgpt from '../assets/png/skills/chatgpt.png'
import coffeescript from '../assets/svg/skills/coffeescript.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import css from '../assets/svg/skills/css.svg'
import data_science from '../assets/png/skills/data_science.png'
import dart from '../assets/svg/skills/dart.svg'
import deno from '../assets/svg/skills/deno.svg'
import django from '../assets/svg/skills/django.svg'
import docker from '../assets/svg/skills/docker.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import gcp from '../assets/svg/skills/gcp.svg'
import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'
import go from '../assets/svg/skills/go.svg'
import google_cloud from '../assets/png/skills/google cloud.png'
import graphql from '../assets/svg/skills/graphql.svg'
import html from '../assets/svg/skills/html.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import julia from '../assets/svg/skills/julia.svg'
import jupyter from '../assets/png/skills/jupyter.png'
import keras from '../assets/png/skills/keras.png'
import kotlin from '../assets/svg/skills/kotlin.svg'
import kubernetes from '../assets/png/skills/kubernets.png'
import lightroom from '../assets/svg/skills/lightroom.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import mathematics from '../assets/png/skills/mathematics.png'
import matlab from '../assets/svg/skills/matlab.svg'
import memsql from '../assets/svg/skills/memsql.svg'
import ml from '../assets/png/skills/ml.png'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import nuxtJS from '../assets/svg/skills/nuxtJS.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import php from '../assets/svg/skills/php.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import premierepro from '../assets/svg/skills/premierepro.svg'
import python from '../assets/svg/skills/python.svg'
import pytorch from '../assets/svg/skills/pytorch.svg'
import react from '../assets/svg/skills/react.svg'
import rl from '../assets/png/skills/rl.png'
import ruby from '../assets/svg/skills/ruby.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import scikit_learn from '../assets/png/skills/scikit-learn.png'
import strapi from '../assets/svg/skills/strapi.svg'
import svelte from '../assets/svg/skills/svelte.svg'
import swift from '../assets/svg/skills/swift.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'
import vue from '../assets/svg/skills/vue.svg'
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg'
import webix from '../assets/svg/skills/webix.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'

import azure from '../assets/svg/skills/azure.svg'
import blender from '../assets/svg/skills/blender.svg'
import fastify from '../assets/svg/skills/fastify.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import haxe from '../assets/svg/skills/haxe.svg'
import ionic from '../assets/svg/skills/ionic.svg'
import markdown from '../assets/svg/skills/markdown.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import sketch from '../assets/svg/skills/sketch.svg'
import unity from '../assets/svg/skills/unity.svg'
import visualisation from '../assets/png/skills/visualisation.png'
import wolframalpha from '../assets/svg/skills/wolframalpha.svg'

import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'artificial intelligence':
            return ai;
        case 'algorithm':
            return algorithm
        case 'aws':
            return aws;
        case 'azure':
            return azure;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'chatgpt':
            return chatgpt
        case 'docker':
            return docker;
        case 'data science':
            return data_science
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'julia':
            return julia;
        case 'keras':
            return keras;
        case 'python':
            return python;
        case 'machine learning':
            return  ml;
        case 'matlab':
            return matlab;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'pytorch':
            return pytorch;
        case 'reinforcement learning':
            return rl;
        case 'google cloud':
            return google_cloud;
            // case 'gcp':
        //     return gcp;
        // case 'html':
        //     return html;
        // case 'photoshop':
        //     return photoshop;
        // case 'illustrator':
        //     return illustrator;
        // case 'adobe xd':
        //     return adobeXd;
        // case 'after effects':
        //     return afterEffects;
        // case 'css':
        //     return css;
        // case 'angular':
        //     return angular;
        // case 'javascript':
        //     return javascript;
        case 'jupyter':
            return jupyter
        // case 'next js':
        //     return nextJS;
        // case 'nuxt js':
        //     return nuxtJS;
        // case 'react':
        //     return react;
        // case 'svelte':
        //     return svelte;
        // case 'typescript':
        //     return typescript;
        // case 'vue':
        //     return vue;
        // case 'bootstrap':
        //     return bootstrap;
        // case 'bulma':
        //     return bulma;
        // case 'capacitorjs':
        //     return capacitorjs;
        // case 'coffeescript':
        //     return coffeescript;
        case 'kubernetes':
            return kubernetes;
        // case 'memsql':
        //     return memsql;
        case 'postgresql':
            return postgresql;
        // case 'tailwind':
        //     return tailwind;
        // case 'vitejs':
        //     return vitejs;
        // case 'vuetifyjs':
        //     return vuetifyjs;
        // case 'c#':
        //     return csharp;
        // case 'dart':
        //     return dart;
        // case 'kotlin':
        //     return kotlin;
        // case 'php':
        //     return php;
        // case 'ruby':
        //     return ruby;
        // case 'swift':
        //     return swift;
        // case 'adobe audition':
        //     return adobeaudition;
        // case 'deno':
        //     return deno;
        // case 'gimp':
        //     return gimp;
        // case 'graphql':
        //     return graphql;
        // case 'lightroom':
        //     return lightroom;
        // case 'materialui':
        //     return materialui;
        case 'mathematics':
            return mathematics;
        // case 'nginx':
        //     return nginx;
        // case 'premiere pro':
        //     return premierepro;
        // case 'selenium':
        //     return selenium;
        case 'scikit-learn':
            return scikit_learn
        // case 'strapi':
        //     return strapi;
        case 'tensorflow':
            return tensorflow;
        // case 'webix':
        //     return webix;
        // case 'wordpress':
        //     return wordpress;
        // case 'blender':
        //     return blender;
        // case 'fastify':
        //     return fastify;
        // case 'figma':
        //     return figma;
        // case 'flutter':
        //     return flutter;
        // case 'haxe':
        //     return haxe;
        // case 'ionic':
        //     return ionic;
        // case 'markdown':
        //     return markdown;
        // case 'microsoft office':
        //     return microsoftoffice;
        // case 'picsart':
        //     return picsart;
        // case 'sketch':
        //     return sketch;
        // case 'unity':
        //     return unity;
        case 'visualisation':
            return visualisation
        // case 'wolframalpha':
        //     return wolframalpha;
        // case 'canva':
        //     return canva;
        default:
            break;
    }
}
