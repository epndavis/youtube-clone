<template>
    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 180">
        <defs>
            <path id="b" d="M19.2 160.2C8.61 160.22.02 151.66 0 141.07L-.22 19.4C-.24 8.82 8.32.22 18.91.2 67.1.11 192.5-.11 240.69-.2c10.59-.02 19.18 8.54 19.2 19.13l.22 121.67c.02 10.58-8.54 19.18-19.13 19.2-48.19.09-173.59.31-221.78.4z" />

            <path id="a" d="M105.5 100L71 120V40l34.5 20L140 80l-34.5 20z" />

            <path id="d" d="M111.5 55.6h17v48.8h-17V55.6z" />

            <path id="e" d="M155.5 100L120 120V40l35.5 20L191 80l-35.5 20z" />

            <clipPath id="c">
                <use xlink:href="#a" />
            </clipPath>
        </defs>

        <use xlink:href="#b" fill="#ff0909" />
        <g clip-path="url(#c)">
            <use xlink:href="#a" fill-opacity="0" stroke="#fff" stroke-width="16" />
        </g>
        <use xlink:href="#d" fill="#f61717" />
        <use xlink:href="#e" fill="#fff" />
    </svg>
</template>
