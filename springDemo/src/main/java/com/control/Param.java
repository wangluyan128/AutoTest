package com.control;

import java.lang.annotation.*;

@Target({ElementType.METHOD,})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Param {
    String paramName() default "";
    String paramType() default "";
    String paramDesc() default "";
}
