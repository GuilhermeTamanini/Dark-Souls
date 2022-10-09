<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="#"
        ><img
          src="https://media.tenor.com/drxH1lO9cfEAAAAi/dark-souls-bonfire.gif"
          alt=""
          class="bonfire"
      /></RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/htp">How to play</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dark Souls:
            </RouterLink>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDarkDropdownMenuLink"
            >
              <li>
                <RouterLink class="dropdown-item" to="/ds1"
                  >Dark Souls 1</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/ds2"
                  >Dark Souls 2</RouterLink
                >
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/ds3"
                  >Dark Souls 3</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bonfire {
  width: 55px;
  height: 50px;
}
.navbar {
  font-size: 24px;
}
</style>
