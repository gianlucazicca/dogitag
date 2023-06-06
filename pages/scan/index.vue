<template>
    qr
    <div class="px-3 md:px-12">
        <div v-if="!isScanning && !resultScanURL"
            class="w-full md:w-8/12 m-auto bg-primary-100/30 aspect-video border-2 rounded-xl border-primary-200/60 h-auto p-24 flex justify-center items-center">
            <button @click="startScanning">Scan</button>
        </div>
        <div v-if="!isScanning && resultScanURL"><button @click="startScanning">Scan again</button></div>
        <div v-show="isScanning" class="w-full md:w-8/12 m-auto">
            <div ref="videoContainer" id="video-container" class="overflow-hidden rounded-xl relative">
                <video ref="qrVideo" id="qr-video" class="w-full"></video>
            </div>
            <button @click="cancelScanning">Cancel Scan</button>
        </div>
        <select v-model="useCamera" @change="changeCamera">
            <option disabled :value="null">Kamera auswählen</option>
            <option v-for="cam in cameras" :value="cam.id">{{ cam.label }}</option>
        </select>
        {{ resultScanURL }}
    </div>
</template>
<script setup>
definePageMeta({
    layout: "app"
});
import QrScanner from 'qr-scanner';
// To enforce the use of the new api with detailed scan results, call the constructor with an options object, see below.
const resultScanURL = ref(null)
const isScanning = ref(false)
const videoContainer = ref(null)
const qrVideo = ref(null)
const qrScanner = ref(null)
const cameras = ref(null)
const useCamera = ref(null)
onMounted(async () => {
    cameras.value = await QrScanner.listCameras(true);
});

const changeCamera = () => {
    console.log(useCamera.value);
    console.log(qrScanner.value);
}
const setupQrScanner = () => {
    qrScanner.value = new QrScanner(
        qrVideo.value,
        result => {
            resultScanURL.value = result.data;
            qrScanner.value.stop();
            isScanning.value = false;
        },
        { /* your options or returnDetailedScanResult: true if you're not specifying any other options */
            highlightScanRegion: true,
            highlightCodeOutline: false,
            maxScansPerSecond: 1,
        },
    );
    qrScanner.value.setCamera(useCamera.value);
    qrScanner.value.start();
}

const startScanning = () => {
    setupQrScanner();
    isScanning.value = true;
};
const cancelScanning = () => {
    isScanning.value = false;
    qrScanner.value.stop();
}
</script>
<style>
#video-container .scan-region-highlight {
    border-radius: 30px;
    outline: rgba(0, 0, 0, .4) solid 50vmax;
    width: 250px;
    height: 250px;
    transform: scaleX(-1)
}

.scan-region-highlight-svg {
    display: none;
}
</style>