<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    fill="none"
    :stroke="color"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 75.99 115.67"
  >
    <defs>
    </defs>
    <path
      class="cls-1"
      :stroke="color"
      stroke-width="19"
      d="m9.5,9.5l49.65,34.32c9.8,6.77,9.8,21.25,0,28.02L9.5,106.17"
    />
  </svg>
</template>


<script>
  export default {
    props: {
      color: {
        type: String,
        required: false,
        default: "currentColor"
      },
      width: {
        type: Number
      },
      height: {
        type: Number
      }
    }
  }

</script>