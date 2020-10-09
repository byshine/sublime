<template>
  <div>
    <div>
      <h6 class="text-lg">North America</h6>
      <ul class="mt-3">
        <li>
          <div class="cursor-pointer">Canada +</div>
          <div class="ml-4">
            <div class="cursor-pointer">&middot; Vancouver</div>
            <div class="cursor-pointer">&middot; Toronto</div>
          </div>
        </li>

        <li>
          <div>United States +</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Base extends Vue {}
</script>
