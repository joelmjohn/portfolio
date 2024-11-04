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

            <v-main>
                <div class="main-content">
                    <v-card variant="outlined">

                        <v-card-text>
                            <div class="d-flex flex-column flex-md-row justify-content-between">
                                <div class="text-center text-md-left">
                                    <h1>I am <b>Joel M John</b><br />
                                        Front End Developer
                                    </h1>
                                    Half a decade experience in software development
                                </div>
                                <div class="d-flex justify-center mt-4 mt-md-0">
                                    <v-avatar color="grey" rounded="5" size="250">
                                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover></v-img>
                                    </v-avatar>
                                </div>
                            </div>
                            <div class="d-flex flex-column flex-md-row align-items-md-start align-items-center mt-4">
                                <v-btn variant="flat" color="grey-lighten-5" prepend-icon="mdi-linkedin"
                                    href="https://www.linkedin.com/in/joel-m-john-308a83137/" target="_blank"
                                    class="mb-2">
                                    Connect with me
                                </v-btn>
                                <v-btn prepend-icon="$vuetify" variant="flat" color="deep-purple-darken-4">
                                    Download Resume
                                </v-btn>
                            </div>

                        </v-card-text>

                    </v-card>

                </div>
                <div class="main-content">
                    <v-row justify="center" align="center">
                        <v-col sm="4" class="d-flex justify-center align-center">
                            <v-card class="small-card ">
                                <v-card-title class="text-center">4.5 Years Experience</v-card-title>
                            </v-card>
                        </v-col>
                        <v-col sm="4" class="d-flex justify-center align-center">
                            <v-card class="small-card " color="deep-purple-accent-4">
                                <v-card-title class="text-center">500+ Features</v-card-title>
                            </v-card>
                        </v-col>
                        <v-col sm="4" class="d-flex justify-center align-center">
                            <v-card class="small-card ">
                                <v-card-title class="text-center">15 Member Teams</v-card-title>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <hr />

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
.small-card {
    max-width: 300px;
}
</style>