<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue';
import { solarizeCompany } from '@/data';

const address = solarizeCompany['address']
const social = solarizeCompany['socialMedia']

</script>

<template>
  <div class="company-slide column flex center">
    <TheLogo :size="125" />
    <h1>Welcome to {{ solarizeCompany['companyName'] }}</h1>
    <p class="mission-statement">{{ solarizeCompany['missionStatement'] }}</p>
    <div class="company-details">
      <h2>Achievements</h2>
      <ul>
        <li v-for="achievement in solarizeCompany['achievements']" :key="achievement">{{ achievement }}</li>
      </ul>
    </div>
    <section class="row socials gap center">
      <div v-for="[key, value] in Object.entries(social)" :key="key" class="column center">
        <a :href="value" :key="value">
          <div class="social-icon center"></div>
        </a>
      </div>
    </section>
    <div class="address">
      <section class="row gap">
        <span>{{ address['country'] }}</span>|<span>{{ address['city'] }}</span>
      </section>
      <span><i>{{ address['street'] }}</i></span>
    </div>
  </div>
</template>

<style scoped>
.socials {
  margin-top: 20px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: var(--color-text-1);
  border-radius: 32px;
}

h2,
h1 {
  text-align: center;
  color: var(--color-text-1);
}

.company-slide {
  padding: 20px;
}

.mission-statement {
  font-style: italic;
  margin-bottom: 20px;
}

.company-details h2 {
  margin-top: 20px;
}

.address {
  margin-top: 10px;
}

.address span {
  font-size: 13px;
}
</style>
