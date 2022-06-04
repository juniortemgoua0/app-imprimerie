import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {DocumentService} from "./document.service";
import {ChangeDocumentStateDto, CreateDocumentDto, UpdateDocumentDto} from "./dto";

@Controller('document')
export class DocumentController {

    constructor(private documentService: DocumentService) {
    }

    @Get('')
    findAllDocument() {
        return this.documentService.findAllDocument();
    }

    @Get('/:idDocument')
    findOneDocument(@Param('idDocument') idDocument: string) {
        return this.documentService.findOneDocument(idDocument);
    }

    @Post(':idUser')
    addDocument(
        @Param('idUser') idUser: string,
        @Body() createDocumentDto: CreateDocumentDto
    ) {
        return this.documentService.addDocument(idUser ,createDocumentDto)
    }

    @Put(':idDocument')
    updateDocument(
        @Param('idDocument') idDocument: string,
        @Body() updateDocumentDto: UpdateDocumentDto
    ) {
        return this.documentService.updateDocument(idDocument, updateDocumentDto)
    }

    @Put(':idDocument')
    updateDocumentState(
        @Param('idDocument') idDocument: string,
        @Body() changeDocumentStateDto : ChangeDocumentStateDto
    ) {
        return this.documentService.updateDocumentState(idDocument, changeDocumentStateDto)
    }

    @Delete(':idDocument')
    deleteDocument(@Param('idDocument') idDocument : string){
        return this.documentService.deleteDocument(idDocument)
    }

}
