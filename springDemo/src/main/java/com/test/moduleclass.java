package com.test;
/*
import com.control.DomainAnnotation;
import com.control.ModuleAnnotation;
import com.control.Param;
import org.springframework.beans.BeansException;

@ModuleAnnotation(moduleName="trialing",moduleDesc = "庭审模块")
public class moduleclass {
    @DomainAnnotation(moduleName = "trialing",rootDomainName = "videoDoamin",rootDomainDesc = "纯语音庭审服务")
    public void m2New(){}
    @DomainAnnotation(moduleName = "trialing",rootDomainName = "videoDoamin",rootDomainDesc = "视频庭审服务"，subDomainName = "speechDoamin,speechVoideoDoamin")
    public String hello(@Param(paramName = "type",paramDesc = "案件类型")String type,@Param(paramName = "num",paramDesc = "案件个数")String num){
    }
    @DomainAnnotation(rootDomainName = "speechDoamin",rootDomainDesc = "语音识别服务")
    public String hello2(@Param(paramName = "caseId",paramDesc = "案号")Long caseId){
    }
    @DomainAnnotation(rootDomainName = "speechVideoDoamin",rootDomainDesc = "视频+语音识别服务")
    public String hello3(@Param(paramName = "name",paramDesc = "姓名")String name,@Param(paramName = "address",paramDesc = "地址")String address){
    }

    public Object postProcessBeforeInstantiation(Class<?> beanClass, String beanName) throws BeansException {
        if (!isOpenAnnotation) {
            return null;
        }

        try {
            // 模块类注解收集
            ModuleAnnotation moduleAnnotation = beanClass.getAnnotation(ModuleAnnotation.class);
            if (null != moduleAnnotation) {
                moudleAnnotationList.add(moduleAnnotation);

            }

            DomainAnnotation domainAnnotation = beanClass.getAnnotation(DomainAnnotation.class);

            // 域服务类注解收集
            if (null != domainAnnotation) {
                domainAnnotationList.add(domainAnnotation);

            }

            // 域服务方法注解收集
            for (Method method : beanClass.getDeclaredMethods()) {
                domainAnnotation = method.getAnnotation(DomainAnnotation.class);
                if (null != domainAnnotation) {
                    domainAnnotationList.add(domainAnnotation);

                    // 获取参数类型，名称，函数签名
                    getMethodInfoFromParam(method,domainAnnotation);
                }

            }
        } catch (Exception e) {

            System.out.println("----------------error:" + e.getLocalizedMessage());
        }

        return null;
    }
    private void getMethodInfoFromParam(Method method,DomainAnnotation domainAnnotation) {
        //参数上的注解的获取
        Annotation[][] parameterAnnotations = method.getParameterAnnotations();
        //保存参数名称
        String[] parameterNames = new String[parameterAnnotations.length];
        //参数类型
        Class<?>[] parameterTypes = method.getParameterTypes();
        int index = 0;
        //拼接函数签名
        StringBuffer sb = new StringBuffer();
        String methodName = method.getName();
        String returnType = method.getReturnType().getName();
        sb.append(returnType).append(" ").append(methodName).append("(");

        Map<String, String> map = new HashMap<String, String>();
        //获取方法的参数名字和参数描述保存到map
        for (Annotation[] parameterAnnotation : parameterAnnotations) {
            for (Annotation annotation : parameterAnnotation) {
                if (annotation instanceof Param) {
                    Param param = (Param) annotation;
                    String paramName = param.paramName();
                    String paramDesc = param.paramDesc();
                    sb.append(parameterTypes[index++].getName()).append(" ").append(paramName).append(",");

                    map.put(paramName, paramDesc);
                }
            }
        }

        AnnotationInfo annotationInfo = new AnnotationInfo();
        domainMethodMap.put(domainAnnotation, annotationInfo);

        String str = sb.toString();
        if (sb.toString().lastIndexOf(',') >= 0) {
            str = sb.substring(0, sb.length() - 1);
        }
        str = str + ")";

        annotationInfo.setMethodSign(str);
        annotationInfo.setParamsDesc(map);

        public ActionResult generateDocument(ErrorContext context) {
            ActionResult result = new ActionResult();
            //递归打印
            printTree();
            return result;
        }
        private void printTree() {
            //获取收集的注解信息
            List<DomainAnnotation> domainList = AnnotationInstantiationAwareBeanPostProcessor.getDomainAnnotationList();
            List<ModuleAnnotation> moudleList = AnnotationInstantiationAwareBeanPostProcessor.getMoudleAnnotationList();
            //打印模块
            System.out.println("application:onlinecourt");
            for (ModuleAnnotation ma : moudleList) {

                String moudleName = ma.moduleName();
                String moudleDesc = ma.moduleDesc();
                StringBuffer sb = new StringBuffer();
                sb.append("-mouduleName:" + moudleName).append(",moudleDesc:" + moudleDesc);
                System.out.println(sb.toString());
                //打印模块下的域服务
                for (DomainAnnotation da : domainList) {

                    if (da.moduleName().equals(moudleName)) {
                        // 打印当前域服务
                        printMethodInfo(da, 2, '-');
                        // 打印子域服务
                        generateSubDoamin(domainList, da.subDomainName(), 3);
                    }
                }
                System.out.println();
            }
        }
}*/