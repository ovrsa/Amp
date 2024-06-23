<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />

    <!-- user-card -->
    <div class="text-sm text-gray-600 flex justify-center items-center py-8">
      <div class="w-full max-w-4xl">
        <div class="flex flex-col md:flex-row">
          <!-- user_photo -->
          <div class="flex justify-center items-center p-4 md:w-1/3">
            <div class="text-center">
              <div>
                <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
                <img src="https://via.placeholder.com/130" alt="User Photo" class="mx-auto" @click="triggerFileInput" />
              </div>

              <div class="mt-5">
                <Input placeholder="UserName" />
              </div>
            </div>
          </div>

          <div class="md:w-2/3">
            <div class="mt-1 md:mt-0">

              <!-- categories -->
              <div class="p-3">
                <div class="flex flex-col items-center w-full lg:w-1/2 max-w-md space-y-10">
                  <Popover v-model="categoryOpen">
                    <PopoverTrigger as-child>
                      <Button
                        variant="outline"
                        role="combobox"
                        :aria-expanded="categoryOpen"
                        class="w-full justify-between"
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

                  <!-- item -->
                  <div class="flex flex-col items-center w-full lg:w-1/2 max-w-md space-y-10">
                    <Popover v-model="itemOpen">
                      <PopoverTrigger as-child>
                        <Button
                          variant="outline"
                          role="combobox"
                          :aria-expanded="itemOpen"
                          class="w-full justify-between"
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

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end space-x-4">
      <router-link to="/profile">
        <Button>
          Cancel
        </Button>
      </router-link>

      <Button>
        Submit
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import { CaretSortIcon } from '@radix-icons/vue';
import { ref } from 'vue';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '../components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover';

const categoryOpen = ref(false);
const itemOpen = ref(false);
const selectedCategory = ref('');
const selectedItem = ref('');

const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
};
</script>

<style>
</style>