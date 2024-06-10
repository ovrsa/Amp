<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- search -->
    <div class="flex-1 flex flex-col-reverse lg:flex-row items-center justify-center mt-4 space-y-8 lg:space-y-0 lg:space-x-4">
      <!-- 検索 -->
      <div class="flex flex-col items-center w-full lg:w-1/2 max-w-md space-y-10">
        <Popover v-model="categoryOpen">
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              role="combobox"
              :aria-expanded="categoryOpen"
              class="w-full lg:w-3/5 justify-between"
            >
              <!-- {{ selectedCategory.value
                ? categories.find((category) => category.value === selectedCategory.value)?.label
                : "Select category..." }} -->
              <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-0">
            <Command>
              <CommandInput class="h-9" placeholder="Search category..." />
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <!-- カテゴリをここで描画 -->
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        
        <Popover v-model="itemOpen">
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              role="combobox"
              :aria-expanded="itemOpen"
              class="w-full lg:w-3/5 justify-between"
            >
              <!-- {{ selectedItem.value
                ? items.value.find((item) => item.value === selectedItem.value)?.label
                : "Select item..." }} -->
              <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-0">
            <Command>
              <CommandInput class="h-9" placeholder="Search item..." />
              <CommandEmpty>No item found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <!-- アイテムをここで描画 -->
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <!-- 検索結果 -->
      <div class="flex flex-col items-center justify-center w-full lg:w-1/2 max-w-md space-y-4 lg:space-y-0">
        <div class="text-right flex flex-col justify-center">
          <div class="text-sm mb-2">選択されたアイテムまたはカテゴリの登録をしているユーザー</div>
          <div class="flex">
            <div class="bg-gray-200 text-black px-2 py-1 m-1 rounded-xl">Kyo yamasaki</div>
            <div class="bg-gray-200 text-black px-2 py-1 m-1 rounded-xl">ooewe</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CaretSortIcon } from '@radix-icons/vue';
import { ref, Ref } from 'vue';

import Header from '../components/Header.vue';
import { Button } from '../components/ui/button';
import {
Command,
CommandEmpty,
CommandGroup,
CommandInput,
CommandList
} from '../components/ui/command';
import {
Popover,
PopoverContent,
PopoverTrigger,
} from '../components/ui/popover';

const categoryOpen: Ref<boolean> = ref(false);
const itemOpen: Ref<boolean> = ref(false);
const selectedCategory: Ref<string> = ref('');
const selectedItem: Ref<string> = ref('');
</script>

<style scoped>
</style>