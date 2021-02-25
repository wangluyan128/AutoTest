package com.control;

import java.lang.annotation.*;

@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface DomainAnnotation {
    String moduleName() default "";
    String rootDomainName() default "";
    String rootDomainDesc() default "";
    String subDomainName() default "";
    String subDomainDesc() default "";
    String returnDesc() default "";
}
