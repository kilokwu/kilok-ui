<template>
  <div class="col" :class="colClasses" :style="colSytle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let valid = true;
  let keys = Object.keys(value);
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "GuluCol",
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String] },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colSytle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
    colClasses() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let createClasses = this.createClasses
      return [
        ...createClasses({ span, offset }),
        ...createClasses(ipad, 'ipad-' ),
        ...createClasses( narrowPc, 'narrow-pc-' ),
        ...createClasses( pc, '-pc-' ),
        ...createClasses( widePc, 'wide-pc-' ),

        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-widePc-${widePc.span}`] : []),
      ];
    },
  },
  methods:{
       createClasses(obj, str = ""){
        if(!obj) {return []}
        let array = [];
        if (obj.span) { array.push(`col-${str}${obj.span}`); }
        if (obj.offset) { array.push(`offset-${str}${obj.offset}`); }
        return array
      }
  }
};
</script>

<style lang="scss">
.col {
  height: 100px;
  width: 50%;
  padding: 0 10px;
  border: 1px solid red;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }

  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: col-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class-prefix: offset-narrowPc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>
