<template>
    <div>
        <Navbar />

        <Nuxt keep-alive :keep-alive-props="{ include: ['Index'] }" />
    </div>
</template>
