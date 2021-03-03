package com.test1;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TextEditorConfig {
    @Bean
    public SpellChecker spellChecker(){
        return new SpellChecker();
    }
    
}
