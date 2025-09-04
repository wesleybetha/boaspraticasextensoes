document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.content-section');
    const sidebar = document.getElementById('sidebar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    const setActiveLink = (targetId) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            }
        });
    };

    const showSection = (targetId) => {
        contentSections.forEach(section => {
            section.classList.add('hidden');
            if (section.id === targetId) {
                section.classList.remove('hidden');
            }
        });
        setActiveLink(targetId);
        window.scrollTo(0, 0); // Rola para o topo ao trocar de seção
    };
    
    // Exibir a seção 'Início' por padrão
    showSection('section-0');

    document.getElementById('nav-menu').addEventListener('click', (event) => {
        event.preventDefault();
        const link = event.target.closest('a');
        if (link && link.dataset.target) {
            const targetId = link.dataset.target;
            showSection(targetId);
             if (sidebar.classList.contains('translate-x-0')) {
                 sidebar.classList.remove('translate-x-0');
                 sidebar.classList.add('-translate-x-full');
             }
        }
    });
    
    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
        sidebar.classList.toggle('translate-x-0');
    });

    document.querySelectorAll('[data-copy-btn]').forEach(button => {
        const span = button.querySelector('span');
        const icon = button.querySelector('i');
        const originalText = span ? span.textContent : 'Copiar';

        button.addEventListener('click', () => {
            const block = button.closest('[data-code-block]');
            const code = block.querySelector('[data-code-content]').innerText;
            
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                if(span) span.textContent = 'Copiado!';
                if(icon) {
                    icon.classList.remove('fa-copy');
                    icon.classList.add('fa-check');
                }
                
                setTimeout(() => {
                    if(span) span.textContent = originalText;
                    if(icon) {
                        icon.classList.remove('fa-check');
                        icon.classList.add('fa-copy');
                    }
                }, 2000);
            } catch (err) {
                console.error('Falha ao copiar texto: ', err);
            }
            document.body.removeChild(textarea);
        });
    });

    const jrxmlInternoContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Jaspersoft Studio version 6.21.3.final using JasperReports Library version 6.10.0  -->
<jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Report_6201" pageWidth="595" pageHeight="842" whenNoDataType="NoDataSection" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="20" bottomMargin="20" scriptletClass="ar.com.fdvs.dj.core.DJDefaultScriptlet" whenResourceMissingType="Key" uuid="529eaa27-6b95-4e25-925d-de4652bd5670">
    <parameter name="SUB_REPORT_JASPERS" class="java.util.Map"/>
    <parameter name="SUB_REPORT_DATA_SOURCES" class="java.util.Map"/>
    <parameter name="RELATORIO_TITULO" class="java.lang.String"/>
    <parameter name="RELATORIO_PARAMETROS" class="java.lang.String"/>
    <parameter name="RELATORIO_PROTOCOLO_EXECUCAO" class="java.lang.String"/>
    <parameter name="RELATORIO_FORMATO_EXPORTACAO" class="java.lang.String"/>
    <parameter name="RELATORIO_VERSAO_NUM" class="java.lang.String"/>
    <parameter name="RELATORIO_VERSAO_DATA" class="java.lang.String"/>
    <parameter name="ENTIDADE_NOME" class="java.lang.String"/>
    <parameter name="ENTIDADE_BRASAO" class="java.awt.Image"/>
    <parameter name="BTH_ENTIDADE" class="java.util.Map"/>
    <parameter name="BTH_ENTIDADE_ESTADO" class="java.lang.String"/>
    <parameter name="USUARIO_ID" class="java.lang.String"/>
    <parameter name="USUARIO_NOME" class="java.lang.String"/>
    <parameter name="USUARIO_EMAIL" class="java.lang.String"/>
    <parameter name="SISTEMA_NOME" class="java.lang.String"/>
    <parameter name="DESENVOLVEDOR_NOME" class="java.lang.String"/>
    <field name="descricao" class="java.lang.String"/>
    <field name="codigoMaterial" class="java.lang.String"/>
    <field name="grupo" class="java.lang.String"/>
    <field name="classe" class="java.lang.String"/>
    <pageHeader>
        <band height="76" splitType="Stretch">
            <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
            <textField>
                <reportElement x="60" y="0" width="370" height="17" uuid="d6e8ec31-a5bb-4d41-a072-9d066c040ef8">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="14"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{BTH_ENTIDADE_ESTADO}.toUpperCase()]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement x="60" y="18" width="370" height="15" uuid="9a59547d-348d-4770-b1a4-c01a04d1bb48">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="12"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{ENTIDADE_NOME}.toUpperCase()]]></textFieldExpression>
            </textField>
            <textField pattern="dd/MM/yyyy">
                <reportElement x="501" y="14" width="54" height="12" uuid="94898ae4-c85b-4af7-8167-39755ba993fb">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[new java.util.Date()]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement positionType="Float" x="505" y="0" width="22" height="12" uuid="4deeb654-a5f8-462a-b671-e508777d03d9">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$V{PAGE_NUMBER}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="472" y="14" width="22" height="12" uuid="5a8b712a-4a4c-469b-8aa8-09a356f38509">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[Data:]]></text>
            </staticText>
            <staticText>
                <reportElement x="60" y="47" width="40" height="10" uuid="dc113404-d3fa-461e-9cb5-0aa4f0ea5b1b">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                    <printWhenExpression><![CDATA[!$P{RELATORIO_PARAMETROS}.isEmpty()]]></printWhenExpression>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="7"/>
                </textElement>
                <text><![CDATA[Parâmetros:]]></text>
            </staticText>
            <textField isStretchWithOverflow="true">
                <reportElement x="100" y="47" width="441" height="10" uuid="78de859a-fddb-4542-9412-acf4929cd9b3">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="7"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_PARAMETROS}]]></textFieldExpression>
            </textField>
            <textField evaluationTime="Report">
                <reportElement x="533" y="0" width="22" height="12" uuid="8a1aaab0-08ca-4440-8425-69ed5a25d4f2">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$V{PAGE_NUMBER}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="527" y="0" width="10" height="12" uuid="68e5bbf0-a7af-4449-afe4-83433d2cda16">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Center" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[/]]></text>
            </staticText>
            <image>
                <reportElement x="4" y="5" width="50" height="50" uuid="e9831725-3114-4fb6-a8dc-75bc05ca92b1"/>
                <imageExpression><![CDATA[$P{ENTIDADE_BRASAO}]]></imageExpression>
            </image>
            <textField>
                <reportElement x="60" y="34" width="370" height="13" uuid="817deee7-e996-405f-9a5a-6cb9cdedbeb2">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="10"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_TITULO}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="472" y="0" width="33" height="12" uuid="48216cb5-9bff-495b-9f81-1620e96ee3db">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[Página:]]></text>
            </staticText>
        </band>
    </pageHeader>
    <columnHeader>
        <band height="12">
            <property name="com.jaspersoft.studio.unit.height" value="px"/>
            <staticText>
                <reportElement x="0" y="0" width="50" height="12" uuid="c924dde8-c0c8-41ec-bedb-93f54105a08d">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement>
                    <font fontName="Arial" size="9" isBold="false"/>
                </textElement>
                <text><![CDATA[Código]]></text>
            </staticText>
            <staticText>
                <reportElement x="50" y="0" width="270" height="12" uuid="daef39be-04ff-4dfb-89e2-7226b23d2fb9">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement>
                    <font fontName="Arial" size="9" isBold="false"/>
                </textElement>
                <text><![CDATA[Descrição]]></text>
            </staticText>
            <staticText>
                <reportElement x="320" y="0" width="120" height="12" uuid="f107f94a-73f8-4658-8ec6-7994cc990f86">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement textAlignment="Center">
                    <font fontName="Arial" size="9" isBold="false"/>
                </textElement>
                <text><![CDATA[Grupo]]></text>
            </staticText>
            <staticText>
                <reportElement x="440" y="0" width="115" height="12" uuid="8ecc0582-4f5a-4a43-8252-dca6f11ef833">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement textAlignment="Center">
                    <font fontName="Arial" size="9" isBold="false"/>
                </textElement>
                <text><![CDATA[Classe]]></text>
            </staticText>
        </band>
    </columnHeader>
    <detail>
        <band height="17">
            <property name="com.jaspersoft.studio.unit.height" value="px"/>
            <textField>
                <reportElement x="0" y="0" width="50" height="12" uuid="a7bf2226-5fd8-462c-beb2-9b1b8582fc00">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement>
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$F{codigoMaterial}]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement x="50" y="0" width="270" height="12" uuid="b6c6e6e0-55de-461f-9f89-2a1dc37de7fd">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement>
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$F{descricao}]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement x="320" y="0" width="120" height="12" uuid="dd5e90fd-e471-460b-9a7b-b1b0c3c547c2">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement textAlignment="Center">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$F{grupo}]]></textFieldExpression>
            </textField>
            <textField pattern="#,###,##0.00">
                <reportElement x="440" y="0" width="115" height="12" uuid="633fe254-a3fc-4ccb-ad13-a2018a16d493">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement textAlignment="Center">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$F{classe}]]></textFieldExpression>
            </textField>
        </band>
    </detail>
    <pageFooter>
        <band height="10">
            <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
            <textField>
                <reportElement x="0" y="0" width="555" height="10" uuid="dbaa38c8-fe63-4084-a86b-62acc59b8f3f">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                    <property name="com.jaspersoft.studio.unit.y" value="px"/>
                </reportElement>
                <box>
                    <topPen lineWidth="1.0" lineStyle="Solid" lineColor="#000000"/>
                    <leftPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                    <bottomPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                    <rightPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                </box>
                <textElement textAlignment="Right" verticalAlignment="Middle">
                    <font fontName="Arial" size="6"/>
                </textElement>
                <textFieldExpression><![CDATA["Sistema: " + $P{SISTEMA_NOME}+" - Usuário: " + $P{USUARIO_ID} +". Emissão: "+DATEFORMAT(NOW() ,"dd'/'MM'/'yyyy', às' HH:mm:ss")+". Protocolo: "+ $P{RELATORIO_PROTOCOLO_EXECUCAO}]]></textFieldExpression>
            </textField>
        </band>
    </pageFooter>
    <noData>
        <band height="131">
            <textField>
                <reportElement x="60" y="0" width="370" height="17" uuid="1e215bec-67bc-4108-8db9-fed26eda6ce3">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="14"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{BTH_ENTIDADE_ESTADO}.toUpperCase()]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement x="60" y="18" width="370" height="15" uuid="3358f942-eeea-4e0b-bb70-c28146c38bc2">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="12"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{ENTIDADE_NOME}.toUpperCase()]]></textFieldExpression>
            </textField>
            <textField pattern="dd/MM/yyyy">
                <reportElement x="501" y="0" width="54" height="12" uuid="4c253ffc-980d-4c6f-adaf-2585300b86f2">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[new java.util.Date()]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="479" y="0" width="22" height="12" uuid="775bed34-8fef-4dee-9ac4-185b7229e7ce">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[Data:]]></text>
            </staticText>
            <staticText>
                <reportElement x="60" y="47" width="40" height="10" uuid="c2c76dbd-99f9-4753-8b46-64de8c840fc8">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                    <printWhenExpression><![CDATA[!$P{RELATORIO_PARAMETROS}.isEmpty()]]></printWhenExpression>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="7"/>
                </textElement>
                <text><![CDATA[Parâmetros:]]></text>
            </staticText>
            <textField isStretchWithOverflow="true">
                <reportElement x="100" y="47" width="441" height="10" uuid="b5f414bb-3f0b-469a-85ba-dcd906f1191f">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="7"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_PARAMETROS}]]></textFieldExpression>
            </textField>
            <image>
                <reportElement x="4" y="5" width="50" height="50" uuid="fb097406-5a2a-4bd0-94a9-c318499efaaa"/>
                <imageExpression><![CDATA[$P{ENTIDADE_BRASAO}]]></imageExpression>
            </image>
            <textField>
                <reportElement x="60" y="34" width="370" height="13" uuid="50622073-91d6-4eea-919b-03a5a5275fa6">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="10"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_TITULO}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="0" y="90" width="555" height="41" uuid="a011e139-f1eb-422e-8359-55b8553074f6">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                    <printWhenExpression><![CDATA[!$P{RELATORIO_PARAMETROS}.isEmpty()]]></printWhenExpression>
                </reportElement>
                <textElement textAlignment="Center" verticalAlignment="Middle">
                    <font fontName="Arial" size="16" isBold="true"/>
                </textElement>
                <text><![CDATA[Não há dados para emissão com os parâmetros selecionados]]></text>
            </staticText>
        </band>
    </noData>
</jasperReport>
`;
    const jrxmlExternoContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Created with Jaspersoft Studio version 6.21.3.final using JasperReports Library version 6.10.0  -->
<jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Report_5575" pageWidth="595" pageHeight="842" whenNoDataType="NoDataSection" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="20" bottomMargin="20" scriptletClass="ar.com.fdvs.dj.core.DJDefaultScriptlet" whenResourceMissingType="Key" uuid="529eaa27-6b95-4e25-925d-de4652bd5670">
    <style name="Style1">
        <conditionalStyle>
            <conditionExpression><![CDATA[$F{listaAssinaturas}.size() == 1]]></conditionExpression>
            <style>
                <box leftPadding="250"/>
            </style>
        </conditionalStyle>
        <conditionalStyle>
            <conditionExpression><![CDATA[$F{listaAssinaturas}.size() == 2]]></conditionExpression>
            <style>
                <box leftPadding="125"/>
            </style>
        </conditionalStyle>
    </style>
    <subDataset name="dsAssinaturas" uuid="3098b830-aecf-40b0-96da-1a101fdd69e1">
        <queryString>
            <![CDATA[]]>
        </queryString>
        <field name="nome" class="java.lang.String"/>
        <field name="cpf" class="java.lang.String"/>
        <field name="funcao" class="java.lang.String"/>
        <field name="complemento" class="java.lang.String"/>
    </subDataset>
    <parameter name="pEntidade_map" class="java.util.Map"/>
    <parameter name="pAssinantes_map" class="java.util.Map"/>
    <parameter name="pProcesso_map" class="java.util.Map"/>
    <parameter name="SUB_REPORT_JASPERS" class="java.util.Map"/>
    <parameter name="SUB_REPORT_DATA_SOURCES" class="java.util.Map"/>
    <parameter name="RELATORIO_TITULO" class="java.lang.String"/>
    <parameter name="RELATORIO_PARAMETROS" class="java.lang.String"/>
    <parameter name="RELATORIO_PROTOCOLO_EXECUCAO" class="java.lang.String"/>
    <parameter name="RELATORIO_FORMATO_EXPORTACAO" class="java.lang.String"/>
    <parameter name="RELATORIO_VERSAO_NUM" class="java.lang.String"/>
    <parameter name="RELATORIO_VERSAO_DATA" class="java.lang.String"/>
    <parameter name="ENTIDADE_NOME" class="java.lang.String"/>
    <parameter name="ENTIDADE_BRASAO" class="java.awt.Image"/>
    <parameter name="BTH_ENTIDADE" class="java.util.Map"/>
    <parameter name="BTH_ENTIDADE_ESTADO" class="java.lang.String"/>
    <parameter name="USUARIO_ID" class="java.lang.String"/>
    <parameter name="USUARIO_NOME" class="java.lang.String"/>
    <parameter name="USUARIO_EMAIL" class="java.lang.String"/>
    <parameter name="SISTEMA_NOME" class="java.lang.String"/>
    <parameter name="DESENVOLVEDOR_NOME" class="java.lang.String"/>
    <field name="entidade_cnpj" class="java.lang.String"/>
    <field name="entidade_bairro" class="java.lang.String"/>
    <field name="entidade_endereco" class="java.lang.String"/>
    <field name="entidade_cep" class="java.lang.String"/>
    <field name="entidade_numero" class="java.lang.String"/>
    <field name="entidade_telefone" class="java.lang.String"/>
    <field name="entidade_email" class="java.lang.String"/>
    <field name="entidade_site" class="java.lang.String"/>
    <field name="entidade_nomeEstado" class="java.lang.String"/>
    <field name="entidade_nomeMunicipio" class="java.lang.String"/>
    <field name="listaAssinaturas" class="java.util.List"/>
    <field name="licitacao" class="java.lang.String"/>
    <field name="pregao" class="java.lang.String"/>
    <field name="nomeFornecedor" class="java.lang.String"/>
    <field name="docFornecedor" class="java.lang.String"/>
    <field name="itemSequencial" class="java.lang.String"/>
    <field name="itemCodigo" class="java.lang.String"/>
    <field name="itemQtde" class="java.math.BigDecimal"/>
    <field name="itemUnid" class="java.lang.String"/>
    <field name="itemDescricao" class="java.lang.String"/>
    <field name="itemMarca" class="java.lang.String"/>
    <field name="itemRegMS" class="java.lang.String"/>
    <field name="itemUnitario" class="java.math.BigDecimal"/>
    <field name="itemTotal" class="java.math.BigDecimal"/>
    <field name="dataAbertura" class="java.lang.String"/>
    <field name="horaAbertura" class="java.lang.String"/>
    <field name="tipoContratacao" class="java.lang.String"/>
    <field name="tipoModalidade" class="java.lang.String"/>
    <field name="dataProcesso" class="java.lang.String"/>
    <field name="entregaPrazo" class="java.lang.String"/>
    <field name="enderecoFornecedor" class="java.lang.String"/>
    <field name="obsProcesso" class="java.lang.String"/>
    <variable name="email" class="java.lang.String">
        <variableExpression><![CDATA[$F{entidade_email}]]></variableExpression>
    </variable>
    <variable name="site" class="java.lang.String">
        <variableExpression><![CDATA[$F{entidade_site} != "" ? MID($F{entidade_site},8,LEN($F{entidade_site})-7) : null]]></variableExpression>
    </variable>
    <pageHeader>
        <band height="113" splitType="Stretch">
            <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
            <textField pattern="dd/MM/yyyy">
                <reportElement x="501" y="16" width="54" height="12" uuid="2c0f30c8-6b30-4a66-99b8-c87990683f24">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[new java.util.Date()]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement positionType="Float" x="505" y="2" width="22" height="12" uuid="7d86ff96-f2f6-4877-9599-df339d8fd252">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$V{PAGE_NUMBER}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="472" y="16" width="22" height="12" uuid="3c842622-8f80-492b-b4bc-3243c84307f2">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[Data:]]></text>
            </staticText>
            <textField evaluationTime="Report">
                <reportElement x="533" y="2" width="22" height="12" uuid="7b6d6fa6-e38f-496a-bad6-5c9ce99c9998">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$V{PAGE_NUMBER}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="527" y="2" width="10" height="12" uuid="48ba909b-1197-45e4-b63d-e2dfdd281cf3">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Center">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[/]]></text>
            </staticText>
            <image>
                <reportElement x="4" y="5" width="50" height="50" uuid="c3b48854-e5b0-4035-8c3c-7394706d02cf"/>
                <imageExpression><![CDATA[$P{ENTIDADE_BRASAO}]]></imageExpression>
            </image>
            <staticText>
                <reportElement x="472" y="2" width="33" height="12" uuid="b0505068-109a-4ed6-982e-b49e92b65466">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[Página:]]></text>
            </staticText>
            <textField isBlankWhenNull="true">
                <reportElement x="60" y="16" width="380" height="12" isRemoveLineWhenBlank="true" uuid="f29d2399-ab03-407a-84d2-c71fd893ed7f"/>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="10" isBold="true"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{ENTIDADE_NOME}]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" isBlankWhenNull="true">
                <reportElement x="60" y="30" width="380" height="12" isRemoveLineWhenBlank="true" uuid="c2a26878-556f-4af3-886c-4d1e5dff3efd">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="9" isBold="false"/>
                </textElement>
                <textFieldExpression><![CDATA[java.text.MessageFormat.format("{0}{1}{2}{3}",
                        ($F{entidade_endereco} != null && $F{entidade_endereco}.length() > 0 ? $F{entidade_endereco} : ""),
                        ($F{entidade_numero} != null && $F{entidade_numero}.length() > 0 ? ", " + $F{entidade_numero} : ""),
                        ($F{entidade_bairro} != null && $F{entidade_bairro}.length() > 0 ? " - " + $F{entidade_bairro} : ""),
                        ($F{entidade_nomeMunicipio} != null && $F{entidade_nomeMunicipio}.length() > 0 ? " - " + $F{entidade_nomeMunicipio} : ""),
                        ($F{entidade_nomeEstado} != null && $F{entidade_nomeEstado}.length() > 0 ? " - " + $F{entidade_nomeEstado} : "")

                )]]></textFieldExpression>
            </textField>
            <textField isStretchWithOverflow="true" evaluationTime="Report" isBlankWhenNull="true">
                <reportElement x="60" y="54" width="380" height="12" isRemoveLineWhenBlank="true" uuid="94054b2a-1caf-41c0-abe9-aa7989858da9">
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <box rightPadding="0">
                    <bottomPen lineWidth="0.0"/>
                </box>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="9" isItalic="true"/>
                </textElement>
                <textFieldExpression><![CDATA[IF(EQUALS($V{email},null),IF(EQUALS($V{site},null),"","Site: "+$V{site}),IF(EQUALS($V{site},null),"E-mail: "+$V{email},"E-mail: "+$V{email} + "   " +"Site: "+$V{site}))]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement x="60" y="42" width="380" height="12" isRemoveLineWhenBlank="true" uuid="7303246b-b235-497c-bb9f-e685f3202d3e">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$F{entidade_cep} != "" ? "CEP: " + LEFT($F{entidade_cep},5)+"-"+MID($F{entidade_cep},6,3) : "" + 
"  CNPJ: " + LEFT($F{entidade_cnpj},2)+"." + 
MID($F{entidade_cnpj},3,3)+"." + 
MID($F{entidade_cnpj},6,3)+"/" + 
MID($F{entidade_cnpj},9,4)+"-" + 
MID($F{entidade_cnpj},13,2) +
"  Telefone: ("+LEFT($F{entidade_telefone},2)+") "+
MID($F{entidade_telefone},3,4) +"-"+
MID($F{entidade_telefone},7,4)]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement x="60" y="2" width="380" height="14" isRemoveLineWhenBlank="true" uuid="1f7f4ae8-6a65-42b1-b491-99401120498e"/>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="11" isBold="true"/>
                </textElement>
                <textFieldExpression><![CDATA[UPPER($P{BTH_ENTIDADE_ESTADO})]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement positionType="Float" x="0" y="90" width="555" height="18" isRemoveLineWhenBlank="true" uuid="dd22d13f-f585-4db5-829d-07bf4d66e9ec">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <printWhenExpression><![CDATA[$V{PAGE_NUMBER}.equals( 1 )]]></printWhenExpression>
                </reportElement>
                <box>
                    <topPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                    <leftPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                    <bottomPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                    <rightPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                </box>
                <textElement textAlignment="Center" verticalAlignment="Middle">
                    <font fontName="Arial" size="12" isBold="true"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_TITULO}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="60" y="66" width="47" height="11" uuid="549c4fd3-9052-4e03-89ac-cf05b0aa3c08">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                    <printWhenExpression><![CDATA[!$P{RELATORIO_PARAMETROS}.isEmpty()]]></printWhenExpression>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="8"/>
                </textElement>
                <text><![CDATA[Parâmetros:]]></text>
            </staticText>
            <textField isStretchWithOverflow="true">
                <reportElement x="107" y="66" width="333" height="11" uuid="9cb28327-c48b-47fb-baca-85eb075032cc">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="8"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_PARAMETROS}]]></textFieldExpression>
            </textField>
        </band>
    </pageHeader>
    <columnHeader>
        <band height="50"/>
    </columnHeader>
    <detail>
        <band height="12">
            <property name="com.jaspersoft.studio.unit.height" value="px"/>
        </band>
    </detail>
    <columnFooter>
        <band height="50"/>
    </columnFooter>
    <pageFooter>
        <band height="10">
            <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
            <textField>
                <reportElement x="0" y="0" width="555" height="10" uuid="2fee4111-d36d-4ee3-9661-6c801de14f89">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                    <property name="com.jaspersoft.studio.unit.y" value="px"/>
                </reportElement>
                <box>
                    <topPen lineWidth="1.0" lineStyle="Solid" lineColor="#000000"/>
                    <leftPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                    <bottomPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                    <rightPen lineWidth="0.0" lineStyle="Solid" lineColor="#000000"/>
                </box>
                <textElement textAlignment="Right" verticalAlignment="Middle">
                    <font fontName="Arial" size="6"/>
                </textElement>
                <textFieldExpression><![CDATA["Sistema: " + $P{SISTEMA_NOME}+" - Usuário: " + $P{USUARIO_ID} +". Emissão: "+DATEFORMAT(NOW() ,"dd'/'MM'/'yyyy', às' HH:mm:ss")+". Protocolo: "+ $P{RELATORIO_PROTOCOLO_EXECUCAO}]]></textFieldExpression>
            </textField>
        </band>
    </pageFooter>
    <noData>
        <band height="169">
            <textField>
                <reportElement x="0" y="119" width="555" height="50" uuid="376328f2-89f9-481d-8abc-46b1c4206fb5"/>
                <textElement textAlignment="Center">
                    <font size="14" isBold="true"/>
                </textElement>
                <textFieldExpression><![CDATA["Não há dados para emissão com os parâmetros selecionados"]]></textFieldExpression>
            </textField>
            <textField pattern="dd/MM/yyyy">
                <reportElement x="501" y="16" width="54" height="12" uuid="b3f142c0-a8ea-4be7-bf1d-8de9d83c94a4">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[new java.util.Date()]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement positionType="Float" x="505" y="2" width="22" height="12" uuid="d385f69b-8f50-46bb-9278-2aa8aa50059d">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$V{PAGE_NUMBER}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="472" y="16" width="22" height="12" uuid="24e3cb41-0543-4bce-90b8-618b54548db7">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[Data:]]></text>
            </staticText>
            <textField evaluationTime="Report">
                <reportElement x="533" y="2" width="22" height="12" uuid="4db72599-ec32-4c99-a13f-8ad477d1fcf2">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Right">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <textFieldExpression><![CDATA[$V{PAGE_NUMBER}]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="527" y="2" width="10" height="12" uuid="53813445-715b-460f-b72f-57207e78c9f4">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Center">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[/]]></text>
            </staticText>
            <staticText>
                <reportElement x="472" y="2" width="33" height="12" uuid="516345ff-685d-4d34-81c0-403f49dd3574">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                    <property name="com.jaspersoft.studio.unit.width" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left">
                    <font fontName="Arial" size="9"/>
                </textElement>
                <text><![CDATA[Página:]]></text>
            </staticText>
            <textField>
                <reportElement x="60" y="0" width="370" height="17" uuid="1d01b6bf-9f63-4c67-9af9-ea3e4815e4b5">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="14"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{BTH_ENTIDADE_ESTADO}.toUpperCase()]]></textFieldExpression>
            </textField>
            <textField>
                <reportElement x="60" y="18" width="370" height="15" uuid="aa262d07-4866-468a-b65b-caccfafb0a50">
                    <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="12"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{ENTIDADE_NOME}.toUpperCase()]]></textFieldExpression>
            </textField>
            <staticText>
                <reportElement x="60" y="47" width="40" height="10" uuid="cd3aa9e6-f379-4b84-a8d4-893d36df7b0e">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                    <printWhenExpression><![CDATA[!$P{RELATORIO_PARAMETROS}.isEmpty()]]></printWhenExpression>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="7"/>
                </textElement>
                <text><![CDATA[Parâmetros:]]></text>
            </staticText>
            <textField isStretchWithOverflow="true">
                <reportElement x="100" y="47" width="441" height="10" uuid="8f93b58d-83d4-4661-9e40-b8d2d131984b">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement verticalAlignment="Middle">
                    <font fontName="Arial" size="7"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_PARAMETROS}]]></textFieldExpression>
            </textField>
            <image>
                <reportElement x="4" y="5" width="50" height="50" uuid="cc69ca8c-9e9f-48a4-a122-1ba63a993546"/>
                <imageExpression><![CDATA[$P{ENTIDADE_BRASAO}]]></imageExpression>
            </image>
            <textField>
                <reportElement x="60" y="34" width="370" height="13" uuid="2181de54-439e-4471-b86b-00d9d53d71ec">
                    <property name="com.jaspersoft.studio.unit.height" value="px"/>
                </reportElement>
                <textElement textAlignment="Left" verticalAlignment="Middle">
                    <font fontName="Arial" size="10"/>
                </textElement>
                <textFieldExpression><![CDATA[$P{RELATORIO_TITULO}]]></textFieldExpression>
            </textField>
        </band>
    </noData>
</jasperReport>
`;

    const downloadFile = (filename, content) => {
        const blob = new Blob([content], { type: 'application/xml;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    document.getElementById('downloadInternoBtn').addEventListener('click', (e) => {
        e.preventDefault();
        downloadFile('NossoPadraoInterno.jrxml', jrxmlInternoContent);
    });

    document.getElementById('downloadExternoBtn').addEventListener('click', (e) => {
        e.preventDefault();
        downloadFile('NossoPadraoExterno.jrxml', jrxmlExternoContent);
    });
});

