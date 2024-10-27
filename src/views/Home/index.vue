<template>
    <v-app>
        <v-layout>
            <v-app-bar prominent style="background-color: rgb(18, 18, 18) !important;">
                <template v-slot:prepend>
                    <template v-if="$vuetify.display.mdAndDown">
                        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                        <v-toolbar-title>Joel M John</v-toolbar-title>
                    </template>
                    <div v-else style="margin-left: 14px;">
                        <v-toolbar-title>Joel M John</v-toolbar-title>
                    </div>

                </template>
                <v-spacer></v-spacer>

                <template v-if="$vuetify.display.mdAndUp">
                    <v-tabs v-model="tab" align-tabs="end" color="deep-purple-accent-4">
                        <v-tab :value="1">Landscape</v-tab>
                        <v-tab :value="2">City</v-tab>
                        <v-tab :value="3">Abstract</v-tab>
                    </v-tabs>
                </template>

                <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                <v-list :items="items"></v-list>
            </v-navigation-drawer>

            <v-main style="height: 100vh; ">
                <div class="main-content">
                    <v-card variant="outlined">

                        <v-card-text>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h1>I am <b>Joel M John </b><br />
                                        Front End Developer
                                    </h1>
                                    Half a decade experience in software development
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                    <v-btn variant="flat" color="grey-lighten-5">
                                        Connect with me
                                    </v-btn> &nbsp;
                                    <v-btn prepend-icon="$vuetify" variant="flat" color="deep-purple-darken-4">
                                        Download Resume
                                    </v-btn>
                                </div>
                                <div>
                                    <v-avatar color="grey" rounded="5" size="350">
                                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover></v-img>
                                    </v-avatar>
                                </div>
                            </div>

                        </v-card-text>

                    </v-card>

                </div>
            </v-main>
        </v-layout>
    </v-app>
</template>

<script setup>
import { reactive, defineComponent, ref } from 'vue';

// Component name
defineComponent({
    name: 'homepage'
});

const drawer = ref(false);

// Reactive state
const state = reactive({
    count: 0,
});

const items = ['apple', 'mango'];
</script>

<style scoped>
/* Add any specific styles you need */
</style>