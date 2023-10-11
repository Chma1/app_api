<template>
  <main>
    <div class="footer_foot">
      <ul class="footer_menu text-uppercase">
        <li class="footer_item">
          <a class="footer_link" href="#"> Lorem, ipsum dolor. </a><br />
          <span>Lorem, ipsum dolor.</span><br />
          <span>Lorem, ipsum dolor.</span><br />
          <span>Lorem, ipsum dolor.</span>
        </li>
        <li class="footer_item">
          <a class="footer_link" href="#"> Lorem, ipsum dolor. </a><br />
          <span>Lorem, ipsum dolor.</span><br />
          <span>Lorem, ipsum dolor.</span><br />
          <span>Lorem, ipsum dolor.</span>
        </li>
        <li class="footer_item">
          <a class="footer_link" href="#"> Lorem, ipsum dolor. </a><br />
          <span>Lorem, ipsum dolor.</span><br />
          <span>Lorem, ipsum dolor.</span><br />
          <span>Lorem, ipsum dolor.</span>
        </li>
      </ul>
    </div>
  </main>
</template>
<script></script>
<style scoped>
.footer_foot {
  background: black;
  height: 25vh;
}
.footer_menu {
  display: flex;
  justify-content: space-around;
  list-style: none;
}
.footer_item {
  padding: 15px;
}
.footer_link {
  text-decoration: none;
  color: white;
}
.footer_item span:hover{
    color:purple;
    font-size: 18px;
    transition: .5s linear;
cursor: pointer;
}
@media (max-width: 720px) {
  .footer_foot {
    background: black;
    height: 75vh;
    display: flex;
    justify-content: center;
  }
  .footer_menu {
    flex-direction: column;
    display: flex;
  }

}
</style>
