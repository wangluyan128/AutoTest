package com.control;

import java.lang.annotation.*;

@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface ModuleAnnotation {
    String moduleName() default "";
    String moduleDesc() default "";
}
