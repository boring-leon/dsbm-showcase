<template>
  <div class="modal-mask" v-once>
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body">
        If you wish to skip the typing effect, <b>double click</b> on the text that's being typed
        </div>

        <div class="modal-footer">
            <button class="modal-button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>