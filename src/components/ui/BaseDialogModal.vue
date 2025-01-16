<template>
  <dialog open><slot name="title"></slot><slot name="text"></slot><slot name="actions"></slot></dialog>
</template>

<style>
dialog {
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 310px;
  background-color: rgb(255, 186, 186);
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
